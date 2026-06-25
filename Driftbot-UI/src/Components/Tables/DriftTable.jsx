// components/tables/DriftTable.jsx

import { DataGrid } from "@mui/x-data-grid";
import { Chip, Button } from "@mui/material";

const columns = [
  {
    field: "resource",
    headerName: "RESOURCE",
    flex: 1,
  },

  {
    field: "description",
    headerName: "DESCRIPTION",
    flex: 1.5,
  },

  {
    field: "environment",
    headerName: "ENVIRONMENT",
    flex: 1,
  },

  {
    field: "severity",
    headerName: "SEVERITY",
    flex: 1,

    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === "Critical"
            ? "error"
            : params.value === "High"
              ? "warning"
              : "success"
        }
      />
    ),
  },

  {
    field: "changedBy",
    headerName: "CHANGED BY",
    flex: 1,
  },

  {
    field: "iac",
    headerName: "IAC",
    flex: 1,
  },

  {
    field: "status",
    headerName: "STATUS",
    flex: 1,
  },

  {
    field: "actions",
    headerName: "ACTIONS",
    flex: 1.2,

    renderCell: () => (
      <div className="flex gap-2">

        <Button
          size="small"
          variant="outlined"
          sx={{
            color: 'var(--color-orange-500) !important',
            borderColor: 'var(--color-orange-500) !important',
            '&:hover': {
              backgroundColor: 'var(--color-orange-500) !important',
              color: 'white !important',
              borderColor: 'var(--color-orange-500) !important',
            },
          }}
        >
          Diff
        </Button>

        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: 'var(--color-orange-500) !important',
            color: 'white !important',
            '&:hover': {
              backgroundColor: 'var(--color-orange-500)!important',
            },
          }}
        >
          Ticket
        </Button>

      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    resource: "azurerm_nsg.prod_nsg",
    description: "SSH rule added 0.0.0.0/0",
    environment: "Production",
    severity: "Critical",
    changedBy: "Rahul S.",
    iac: "Terraform",
    status: "Open",
  },

  {
    id: 2,
    resource: "azurerm_nsg.web_nsg",
    description: "RDP port 3389 exposed",
    environment: "Production",
    severity: "Critical",
    changedBy: "Rahul S.",
    iac: "Terraform",
    status: "Open",
  },

  {
    id: 3,
    resource: "storage.datalake",
    description: "Public access enabled",
    environment: "Data West",
    severity: "High",
    changedBy: "Priya P.",
    iac: "Terraform",
    status: "Pending",
  },
];

export default function DriftTable() {
  return (
    <div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
      />
    </div>
  );
}
