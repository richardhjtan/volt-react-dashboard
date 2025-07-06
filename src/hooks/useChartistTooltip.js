import { useEffect } from "react";

/**
 * Custom hook to add tooltips to Chartist charts.
 * @param {object} chartRef - ref to the chart container
 * @param {object} tooltipRef - ref to the tooltip div
 */
export function useChartistTooltip(chartRef, tooltipRef) {
  useEffect(() => {
    if (!chartRef.current) return;

    // Helper to show tooltip
    function showTooltip(e, content) {
      const tooltip = tooltipRef.current;
      tooltip.innerHTML = content;
      tooltip.classList.add("tooltip-show");

      // Wait for DOM to update so offsetWidth/offsetHeight are correct
      setTimeout(() => {
        const chartRect = chartRef.current.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        const left = e.clientX - chartRect.left - tooltipWidth / 2;
        const top = e.clientY - chartRect.top - tooltipHeight - 10;

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      }, 0);
    }

    // Helper to hide tooltip
    function hideTooltip() {
      tooltipRef.current.classList.remove("tooltip-show");
    }

    // Listen for Chartist's draw events
    const chart = chartRef.current.__chartist__;
    if (!chart) return;

    function onDraw(ctx) {
      let content = "";
      if (ctx.type === "point") {
        content = ctx.meta || ctx.value.y;
      } else if (ctx.type === "bar") {
        content = ctx.meta || ctx.value.y || ctx.value.x;
      } else if (ctx.type === "slice") {
        content = ctx.meta || ctx.value || ctx.value.y || ctx.value.x;
      } else {
        return;
      }

      ctx.element._node.addEventListener("mouseenter", (e) =>
        showTooltip(e, content)
      );
      ctx.element._node.addEventListener("mouseleave", hideTooltip);
    }

    chart.on("draw", onDraw);

    // Cleanup
    return () => {
      chart.off("draw", onDraw);
    };
  }, [chartRef, tooltipRef]);
}
