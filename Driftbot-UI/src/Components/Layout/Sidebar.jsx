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
} from "@mui/material";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Run Scan",
    icon: <PlayCircleIcon />,
  },
  {
    text: "Drift Reports",
    icon: <DescriptionIcon />,
  },
  {
    text: "Environments",
    icon: <StorageIcon />,
  },
  {
    text: "AI Insights",
    icon: <PsychologyIcon />,
  },
  {
    text: "Governance",
    icon: <SecurityIcon />,
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
  },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
      }}
    >
      <div className="h-20 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-500">
          DriftBot
        </h1>
      </div>

      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}