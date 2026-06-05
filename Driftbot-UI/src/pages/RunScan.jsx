


import {
  Card,
  Button,
  FormControl,
  Select,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function RunScan() {
  return (
    <div>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          Run Drift Scan
        </h1>

        <p className="text-gray-500 mt-2">
          Configure and trigger on-demand drift scans
          across Azure environments
        </p>

      </div>

      {/* MAIN GRID */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
      "
      >

        {/* LEFT CARD */}

        <Card className="p-8">

          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
          >
            Scan Configuration
          </Typography>

          {/* Scan Scope */}

          <div className="mb-6">

            <p className="mb-2 font-semibold">
              Scan Scope
            </p>

            <FormControl fullWidth>

              <Select
                defaultValue="all"
              >
                <MenuItem value="all">
                  All Environments
                </MenuItem>

                <MenuItem value="prod">
                  Production
                </MenuItem>

                <MenuItem value="dev">
                  Development
                </MenuItem>

                <MenuItem value="staging">
                  Staging
                </MenuItem>

              </Select>

            </FormControl>

          </div>

          {/* IaC Type */}

          <div className="mb-6">

            <p className="mb-2 font-semibold">
              IaC Type
            </p>

            <FormControl fullWidth>

              <Select
                defaultValue="all"
              >
                <MenuItem value="all">
                  Terraform + Bicep + ARM
                </MenuItem>

                <MenuItem value="terraform">
                  Terraform
                </MenuItem>

                <MenuItem value="bicep">
                  Bicep
                </MenuItem>

                <MenuItem value="arm">
                  ARM Templates
                </MenuItem>

              </Select>

            </FormControl>

          </div>

          {/* SWITCHES */}

          <div className="space-y-6">

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-semibold">
                  Ignore Transient Drift
                </h3>

                <p className="text-gray-500 text-sm">
                  Ignore temporary VMSS/AKS changes
                </p>
              </div>

              <Switch defaultChecked />

            </div>

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-semibold">
                  Include User Attribution
                </h3>

                <p className="text-gray-500 text-sm">
                  Detect who changed Azure resources
                </p>
              </div>

              <Switch defaultChecked />

            </div>

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-semibold">
                  Deep Comparison Mode
                </h3>

                <p className="text-gray-500 text-sm">
                  Perform full state validation
                </p>
              </div>

              <Switch />

            </div>

          </div>

          {/* BUTTON */}

          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{
              mt: 5,
              py: 2,
              width: "100%",
              borderRadius: "12px",
            }}
          >
            Start Drift Scan
          </Button>

        </Card>

        {/* RIGHT CARD */}

        <Card className="p-8">

          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
          >
            Scan Schedule
          </Typography>

          <div className="space-y-6">

            <div className="flex justify-between">

              <span>Daily Scheduled</span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Active
              </span>

            </div>

            <div className="flex justify-between">

              <span>Next Run</span>

              <strong>
                Tomorrow 08:00 AM
              </strong>

            </div>

            <div className="flex justify-between">

              <span>Frequency</span>

              <strong>
                Every 24 Hours
              </strong>

            </div>

            <div className="flex justify-between">

              <span>Timeout</span>

              <strong>
                30 Minutes
              </strong>

            </div>

          </div>

          {/* QUICK STATS */}

          <div className="mt-10">

            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
            >
              Quick Stats
            </Typography>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Total Scans (30d)</span>
                <strong>28</strong>
              </div>

              <div className="flex justify-between">
                <span>Average Duration</span>
                <strong>12 min</strong>
              </div>

              <div className="flex justify-between">
                <span>Success Rate</span>
                <strong className="text-green-600">
                  96.4%
                </strong>
              </div>

            </div>

          </div>

        </Card>

      </div>

    </div>
  );
}