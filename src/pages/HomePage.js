import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router";
import { Routes as RoutesConfig } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ element }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      {element}
    </>
  );
};

const RouteWithSidebar = ({ element }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <>
      <Preloader show={!loaded} />
      <Sidebar />
      <main className="content">
        <Navbar />
        {element}
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </>
  );
};

export default () => (
  <Routes>
    <Route path={RoutesConfig.Presentation.path} element={<RouteWithLoader element={<Presentation />} />} />
    <Route path={RoutesConfig.Signin.path} element={<RouteWithLoader element={<Signin />} />} />
    <Route path={RoutesConfig.Signup.path} element={<RouteWithLoader element={<Signup />} />} />
    <Route path={RoutesConfig.ForgotPassword.path} element={<RouteWithLoader element={<ForgotPassword />} />} />
    <Route path={RoutesConfig.ResetPassword.path} element={<RouteWithLoader element={<ResetPassword />} />} />
    <Route path={RoutesConfig.Lock.path} element={<RouteWithLoader element={<Lock />} />} />
    <Route path={RoutesConfig.NotFound.path} element={<RouteWithLoader element={<NotFoundPage />} />} />
    <Route path={RoutesConfig.ServerError.path} element={<RouteWithLoader element={<ServerError />} />} />

    {/* pages */}
    <Route path={RoutesConfig.DashboardOverview.path} element={<RouteWithSidebar element={<DashboardOverview />} />} />
    <Route path={RoutesConfig.Upgrade.path} element={<RouteWithSidebar element={<Upgrade />} />} />
    <Route path={RoutesConfig.Transactions.path} element={<RouteWithSidebar element={<Transactions />} />} />
    <Route path={RoutesConfig.Settings.path} element={<RouteWithSidebar element={<Settings />} />} />
    <Route path={RoutesConfig.BootstrapTables.path} element={<RouteWithSidebar element={<BootstrapTables />} />} />

    {/* components */}
    <Route path={RoutesConfig.Accordions.path} element={<RouteWithSidebar element={<Accordion />} />} />
    <Route path={RoutesConfig.Alerts.path} element={<RouteWithSidebar element={<Alerts />} />} />
    <Route path={RoutesConfig.Badges.path} element={<RouteWithSidebar element={<Badges />} />} />
    <Route path={RoutesConfig.Breadcrumbs.path} element={<RouteWithSidebar element={<Breadcrumbs />} />} />
    <Route path={RoutesConfig.Buttons.path} element={<RouteWithSidebar element={<Buttons />} />} />
    <Route path={RoutesConfig.Forms.path} element={<RouteWithSidebar element={<Forms />} />} />
    <Route path={RoutesConfig.Modals.path} element={<RouteWithSidebar element={<Modals />} />} />
    <Route path={RoutesConfig.Navs.path} element={<RouteWithSidebar element={<Navs />} />} />
    <Route path={RoutesConfig.Navbars.path} element={<RouteWithSidebar element={<Navbars />} />} />
    <Route path={RoutesConfig.Pagination.path} element={<RouteWithSidebar element={<Pagination />} />} />
    <Route path={RoutesConfig.Popovers.path} element={<RouteWithSidebar element={<Popovers />} />} />
    <Route path={RoutesConfig.Progress.path} element={<RouteWithSidebar element={<Progress />} />} />
    <Route path={RoutesConfig.Tables.path} element={<RouteWithSidebar element={<Tables />} />} />
    <Route path={RoutesConfig.Tabs.path} element={<RouteWithSidebar element={<Tabs />} />} />
    <Route path={RoutesConfig.Tooltips.path} element={<RouteWithSidebar element={<Tooltips />} />} />
    <Route path={RoutesConfig.Toasts.path} element={<RouteWithSidebar element={<Toasts />} />} />

    {/* documentation */}
    <Route path={RoutesConfig.DocsOverview.path} element={<RouteWithSidebar element={<DocsOverview />} />} />
    <Route path={RoutesConfig.DocsDownload.path} element={<RouteWithSidebar element={<DocsDownload />} />} />
    <Route path={RoutesConfig.DocsQuickStart.path} element={<RouteWithSidebar element={<DocsQuickStart />} />} />
    <Route path={RoutesConfig.DocsLicense.path} element={<RouteWithSidebar element={<DocsLicense />} />} />
    <Route path={RoutesConfig.DocsFolderStructure.path} element={<RouteWithSidebar element={<DocsFolderStructure />} />} />
    <Route path={RoutesConfig.DocsBuild.path} element={<RouteWithSidebar element={<DocsBuild />} />} />
    <Route path={RoutesConfig.DocsChangelog.path} element={<RouteWithSidebar element={<DocsChangelog />} />} />

    <Route path="*" element={<Navigate to={RoutesConfig.NotFound.path} />} />
  </Routes>
);
