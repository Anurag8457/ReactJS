
import { Card } from "@mui/material";

import GovernanceChart from "../components/charts/GovernanceChart";
import GovernanceTable from "../components/tables/GovernanceTable";

export default function Governance() {
  return (
    <div>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          Governance
        </h1>

        <p className="text-gray-500 mt-2">
          Compliance monitoring and policy enforcement
        </p>

      </div>

      {/* KPI SECTION */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-8
      "
      >

        <Card className="p-6">
          <p className="text-gray-500">
            Compliance Score
          </p>

          <h2 className="text-4xl font-bold text-green-600">
            92%
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Active Violations
          </p>

          <h2 className="text-4xl font-bold text-red-500">
            8
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Policies Monitored
          </p>

          <h2 className="text-4xl font-bold">
            47
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Resolved This Month
          </p>

          <h2 className="text-4xl font-bold text-blue-600">
            23
          </h2>
        </Card>

      </div>

      {/* COMPLIANCE TREND */}

      <Card className="p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Governance Trend
        </h2>

        <GovernanceChart />

      </Card>

      {/* POLICY TABLE */}

      <Card className="p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Policy Violations
        </h2>

        <GovernanceTable />

      </Card>

      {/* POLICY SUMMARY */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      "
      >

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Security Policies
          </h3>

          <p className="text-green-600 text-3xl font-bold">
            96%
          </p>

        </Card>

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Tagging Policies
          </h3>

          <p className="text-yellow-600 text-3xl font-bold">
            82%
          </p>

        </Card>

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Cost Policies
          </h3>

          <p className="text-green-600 text-3xl font-bold">
            91%
          </p>

        </Card>

      </div>

    </div>
  );
}
