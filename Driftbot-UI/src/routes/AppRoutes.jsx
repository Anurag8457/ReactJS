import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import RunScan from "../pages/RunScan";
import Reports from "../pages/Reports";
import Environment from "../pages/Environments";
import AIInsights from "../pages/AIInsights";
import Governance from "../pages/Governance";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/run-scan"
          element={<RunScan />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/environment"
          element={<Environment />}
        />

        <Route
          path="/ai-insights"
          element={<AIInsights />}
        />

        <Route
          path="/governance"
          element={<Governance />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

    </Routes>
  );
}
