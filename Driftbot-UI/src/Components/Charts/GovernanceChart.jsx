import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// const data = [
//   { month: "Jan", score: 72 },
//   { month: "Feb", score: 76 },
//   { month: "Mar", score: 80 },
//   { month: "Apr", score: 84 },
//   { month: "May", score: 88 },
//   { month: "Jun", score: 92 },
// ];

export default function GovernanceChart({governanceData}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={governanceData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="score"
          stroke="#ff6600"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
