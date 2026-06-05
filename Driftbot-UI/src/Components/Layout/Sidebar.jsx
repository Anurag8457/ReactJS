import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 260;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Run Scan",
    icon: <PlayCircleIcon />,
    path: "/run-scan",
  },
  {
    text: "Drift Reports",
    icon: <DescriptionIcon />,
    path: "/reports",
  },
  {
    text: "Environments",
    icon: <StorageIcon />,
    path: "/environment",
  },
  {
    text: "AI Insights",
    icon: <PsychologyIcon />,
    path: "/ai-insights",
  },
  {
    text: "Governance",
    icon: <SecurityIcon />,
    path: "/governance",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <h2
          style={{
            fontWeight: "bold",
            color: "#f97316",
            fontSize: "24px",
          }}
        >
          DriftBot
        </h2>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
