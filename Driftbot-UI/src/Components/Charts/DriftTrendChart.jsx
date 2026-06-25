import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useState, useEffect } from "react";
import { fetchDriftTrend } from '../../Services/DashboardApi';

// const data = [
//   { day: "Mon", drift: 3 },
//   { day: "Tue", drift: 5 },
//   { day: "Wed", drift: 4 },
//   { day: "Thu", drift: 7 },
//   { day: "Fri", drift: 2 },
//   { day: "Sat", drift: 6 },
//   { day: "Sun", drift: 3 }
// ];


export default function DriftTrendChart({driftData}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={driftData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="drift"
          fill="#ff6600"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
