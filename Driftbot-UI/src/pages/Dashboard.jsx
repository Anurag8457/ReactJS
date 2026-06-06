
import KPICard from "../components/cards/KPICards";

import DriftTrendChart from "../components/charts/DriftTrendChart";
import SeverityChart from "../components/charts/SeverityChart";

import CloudIcon from "@mui/icons-material/Cloud";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Card } from "@mui/material";
<div className="bg-red-500 text-white p-5">
  Tailwind Test
</div>
export default function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Executive Overview
      </h1>

      {/* KPI CARDS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
      >
        <KPICard
          title="Managed Environments"
          value="24"
          icon={<CloudIcon />}
          color="#FFE9DD"
        />

        <KPICard
          title="Active Drift Issues"
          value="7"
          icon={<WarningIcon />}
          color="#FFE2E2"
        />

        <KPICard
          title="Compliance Score"
          value="85%"
          icon={<CheckCircleIcon />}
          color="#E8FFF0"
        />

        <KPICard
          title="Mean Resolution Time"
          value="4.2h"
          icon={<AccessTimeIcon />}
          color="#E6F0FF"
        />
      </div>

      {/* CHARTS */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
        mt-8
      "
      >

        <Card
          className="p-5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Drift Trend
          </h2>

          <DriftTrendChart />
        </Card>

        <Card
          className="p-5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Severity Distribution
          </h2>

          <SeverityChart />
        </Card>

      </div>

    </div>
  );
}



