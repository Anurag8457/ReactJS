

import EnvironmentCard from "../components/cards/EnvironmentCard";

import {
  Card,
  Button,
} from "@mui/material";

export default function Environment() {
  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-bold">
            Environments
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor health and compliance
            across Azure landing zones
          </p>

        </div>

        <Button
          variant="contained"
        >
          Refresh Status
        </Button>

      </div>

      {/* SUMMARY CARDS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
        mb-8
      "
      >

        <Card className="p-6">

          <p className="text-gray-500">
            Total Environments
          </p>

          <h2 className="text-4xl font-bold">
            24
          </h2>

        </Card>

        <Card className="p-6">

          <p className="text-gray-500">
            Healthy
          </p>

          <h2 className="text-4xl font-bold text-green-600">
            18
          </h2>

        </Card>

        <Card className="p-6">

          <p className="text-gray-500">
            Critical
          </p>

          <h2 className="text-4xl font-bold text-red-500">
            3
          </h2>

        </Card>

      </div>

      {/* ENVIRONMENT GRID */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
      >

        <EnvironmentCard
          name="Production"
          compliance={82}
          resources={156}
          issues={7}
          status="Warning"
        />

        <EnvironmentCard
          name="Development"
          compliance={95}
          resources={92}
          issues={1}
          status="Healthy"
        />

        <EnvironmentCard
          name="Staging"
          compliance={91}
          resources={78}
          issues={2}
          status="Healthy"
        />

        <EnvironmentCard
          name="Data West"
          compliance={68}
          resources={45}
          issues={11}
          status="Critical"
        />

      </div>

    </div>
  );
}