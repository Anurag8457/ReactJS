
import {
  Card,
  Button,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

import ComplianceChart from "../components/charts/ComplianceChart";
import DriftTable from "../components/tables/DriftTable";

export default function Reports() {
  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-5xl font-bold">
            Drift Reports
          </h1>

          <p className="text-gray-500">
            Detailed analysis of drift across environments
          </p>
        </div>

        <div className="flex gap-3">

          <Button variant="outlined">
            Export CSV
          </Button>

          <Button variant="outlined">
            Export PDF
          </Button>

        </div>

      </div>

      {/* FILTERS */}

      <Card className="p-5 mb-6">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-5
          gap-4
        "
        >

          <FormControl fullWidth>
            <Select defaultValue="all">
              <MenuItem value="all">
                All Environments
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select defaultValue="all">
              <MenuItem value="all">
                All Severity
              </MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl fullWidth>
            <Select defaultValue="all">
              <MenuItem value="all">
                All IaC Types
              </MenuItem>
            </Select>
          </FormControl> */}

          <TextField
            type="date"
            fullWidth
          />

          <Button
            variant="contained"
          >
            Apply
          </Button>

        </div>

      </Card>

      {/* CHART */}

      <Card className="p-5 mb-6">

        <h2 className="text-2xl font-bold mb-4">
          Compliance Trend
        </h2>

        <ComplianceChart />

      </Card>

      {/* TABLE */}

      <Card className="p-5">

        <h2 className="text-2xl font-bold mb-4">
          Detailed Drift Log
        </h2>

        <DriftTable />

      </Card>

    </div>
  );
}
