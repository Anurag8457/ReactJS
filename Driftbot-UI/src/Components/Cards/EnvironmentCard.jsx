import {
  Card,
  Chip,
  LinearProgress,
} from "@mui/material";

export default function EnvironmentCard({
  name,
  compliance,
  resources,
  issues,
  status,
}) {
  const getColor = () => {
    if (status === "Healthy")
      return "success";

    if (status === "Warning")
      return "warning";

    return "error";
  };

  return (
    <Card
      className="p-6"
      elevation={2}
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          {name}
        </h2>

        <Chip
          label={status}
          color={getColor()}
        />

      </div>

      {/* Compliance */}

      <div className="mb-4">

        <div className="flex justify-between mb-2">

          <span>
            Compliance Score
          </span>

          <strong>
            {compliance}%
          </strong>

        </div>

        <LinearProgress
          variant="determinate"
          value={compliance}
        />

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-gray-100 p-4 rounded-lg">

          <p className="text-gray-500">
            Resources
          </p>

          <h3 className="text-2xl font-bold">
            {resources}
          </h3>

        </div>

        <div className="bg-gray-100 p-4 rounded-lg">

          <p className="text-gray-500">
            Drift Issues
          </p>

          <h3 className="text-2xl font-bold">
            {issues}
          </h3>

        </div>

      </div>

    </Card>
  );
}