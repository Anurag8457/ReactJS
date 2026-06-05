import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

const columns = [
  {
    field: "policy",
    headerName: "POLICY",
    flex: 1.5,
  },

  {
    field: "resource",
    headerName: "RESOURCE",
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
    field: "owner",
    headerName: "OWNER",
    flex: 1,
  },

  {
    field: "status",
    headerName: "STATUS",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    policy: "No Public Storage",
    resource: "storage-prod-01",
    severity: "Critical",
    owner: "Cloud Team",
    status: "Open",
  },

  {
    id: 2,
    policy: "Mandatory Tags",
    resource: "rg-data-west",
    severity: "Medium",
    owner: "Data Team",
    status: "Pending",
  },

  {
    id: 3,
    policy: "No Public SSH",
    resource: "prod-nsg",
    severity: "Critical",
    owner: "Infra Team",
    status: "Open",
  },
];

export default function GovernanceTable() {
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
