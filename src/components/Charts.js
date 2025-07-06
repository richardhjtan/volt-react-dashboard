import React, { useRef, useEffect } from "react";
import {
  LineChart as LineChartComponent,
  BarChart as BarChartComponent,
  PieChart as PieChartComponent,
} from "chartist";
import { useChartistTooltip } from "../hooks/useChartistTooltip";

// Helper to create chart and clean up
function useChartist(ref, type, data, options) {
  useEffect(() => {
    if (!ref.current) return;
    let chart;
    if (type === "Line") {
      chart = new LineChartComponent(ref.current, data, options);
    } else if (type === "Bar") {
      chart = new BarChartComponent(ref.current, data, options);
    } else if (type === "Pie") {
      chart = new PieChartComponent(ref.current, data, options);
    }
    // Store chart instance for tooltip hook
    ref.current.__chartist__ = chart;
    return () => {
      if (chart && chart.detach) chart.detach();
      ref.current.__chartist__ = undefined;
    };
  }, [ref, type, data, options]);
}

export const SalesValueChart = () => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [[1, 2, 2, 3, 3, 4, 3]],
  };
  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };

  useChartist(chartRef, "Line", data, options);
  useChartistTooltip(chartRef, tooltipRef);

  return (
    <div style={{ position: "relative" }}>
      <div ref={chartRef} className="ct-series-g ct-double-octave" />
      <div ref={tooltipRef} className="chartist-tooltip" />
    </div>
  );
};

export const SalesValueChartphone = () => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [[1, 2, 2, 3, 3, 4, 3]],
  };
  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };

  useChartist(chartRef, "Line", data, options);
  useChartistTooltip(chartRef, tooltipRef);

  return (
    <div style={{ position: "relative" }}>
      <div ref={chartRef} className="ct-series-g ct-major-tenth" />
      <div ref={tooltipRef} className="chartist-tooltip" />
    </div>
  );
};

export const CircleChart = (props) => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;
  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: (value) =>
      `${Math.round((value / series.reduce(sum)) * 100)}%`,
  };

  useChartist(chartRef, "Pie", { series }, options);
  useChartistTooltip(chartRef, tooltipRef);

  return (
    <div style={{ position: "relative" }}>
      <div ref={chartRef} className="ct-golden-section" />
      <div ref={tooltipRef} className="chartist-tooltip" />
    </div>
  );
};

export const BarChart = (props) => {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  const {
    labels = [],
    series = [],
    chartClassName = "ct-golden-section",
  } = props;
  const data = { labels, series };
  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: "end",
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
  };

  useChartist(chartRef, "Bar", data, options);
  useChartistTooltip(chartRef, tooltipRef);

  return (
    <div style={{ position: "relative" }}>
      <div ref={chartRef} className={chartClassName} />
      <div ref={tooltipRef} className="chartist-tooltip" />
    </div>
  );
};
