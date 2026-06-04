import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Critical",
    value: 20
  },
  {
    name: "High",
    value: 40
  },
  {
    name: "Medium",
    value: 25
  },
  {
    name: "Low",
    value: 15
  }
];

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#10b981"
];

export default function SeverityChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <PieChart>

        <Pie
          data={data}
          innerRadius={80}
          outerRadius={130}
          dataKey="value"
        >
          {data.map((entry, index) => (
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