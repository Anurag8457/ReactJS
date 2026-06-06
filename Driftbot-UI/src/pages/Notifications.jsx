import { Card } from "@mui/material";

export default function Notifications() {
  return (
    <div>

      <h1 className="text-5xl font-bold">
        Notifications
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Drift alerts and remediation updates
      </p>

      <div className="space-y-5">

        <Card className="p-6">
          <h2 className="font-bold">
            Critical SSH Exposure
          </h2>

          <p className="text-red-500">
            Critical
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold">
            Storage Account Public Access
          </h2>

          <p className="text-orange-500">
            High
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold">
            Governance Tagging Issue
          </h2>

          <p className="text-yellow-500">
            Medium
          </p>
        </Card>

      </div>

    </div>
  );
}