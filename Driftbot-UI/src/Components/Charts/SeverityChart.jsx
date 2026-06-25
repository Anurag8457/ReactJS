import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { fetchDriftTrend } from '../../Services/DashboardApi';

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#10b981"
];

export default function SeverityChart({severityData}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <PieChart>

        <Pie
          data={severityData}
          innerRadius={80}
          outerRadius={130}
          dataKey="value"
          label
        >
          {severityData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}
