import {
  Card,
  Chip,
  Button,
  LinearProgress,
} from "@mui/material";

export default function AIInsightCard({
  title,
  severity,
  confidence,
  explanation,
  recommendation,
}) {
  const getSeverityColor = () => {
    if (severity === "Critical")
      return "error";

    if (severity === "High")
      return "warning";

    return "success";
  };

  return (
    <Card className="p-6">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <Chip
          label={severity}
          color={getSeverityColor()}
        />

      </div>

      {/* CONFIDENCE */}

      <div className="mb-5">

        <div className="flex justify-between mb-2">

          <span>AI Confidence</span>

          <strong>
            {confidence}%
          </strong>

        </div>

        <LinearProgress
          variant="determinate"
          value={confidence}
        />

      </div>

      {/* EXPLANATION */}

      <div className="mb-5">

        <h3 className="font-semibold mb-2">
          Explanation
        </h3>

        <p className="text-gray-600">
          {explanation}
        </p>

      </div>

      {/* RECOMMENDATION */}

      <div className="mb-6">

        <h3 className="font-semibold mb-2">
          Recommendation
        </h3>

        <p className="text-gray-600">
          {recommendation}
        </p>

      </div>

      {/* ACTIONS */}

      <div className="flex gap-3">

        {/* ACTIONS */}



        <Button
          variant="outlined"
        >
          View Details
        </Button>

        <Button
          variant="contained"
          color="success"
        >
          Apply Fix
        </Button>

      </div>

    </Card>
  );
}
