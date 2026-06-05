// components/charts/ComplianceChart.jsx

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", compliance: 78 },
  { month: "Feb", compliance: 82 },
  { month: "Mar", compliance: 79 },
  { month: "Apr", compliance: 85 },
  { month: "May", compliance: 88 },
  { month: "Jun", compliance: 85 },
];

export default function ComplianceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="compliance"
          stroke="#ff6600"
          fill="#ffe7d6"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
