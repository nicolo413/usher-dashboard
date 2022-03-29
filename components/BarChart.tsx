// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// import { Bar } from 'react-chartjs-2';

import React, { PureComponent } from 'react';
import {
  Area,
  XAxis,
  AreaChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

function BarChart({ weeklyData }: { weeklyData: any }) {
  const parsedData = [];
  for (const [key, value] of Object.entries(weeklyData)) {
    parsedData.push({ name: key, ...value });
  }

  console.log(parsedData);

  return (
    <AreaChart
      width={500}
      height={300}
      data={parsedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" tick={false} />
      <YAxis
        yAxisId="seats"
        orientation="left"
        label={{ value: 'Seats', angle: -90, position: 'left' }}
      />
      <Tooltip />
      <Legend />
      <Area
        yAxisId="seats"
        type="monotone"
        fill="#7bcfa3"
        stroke="#7bcfa3"
        dataKey="seats"
        name="Offered"
      />
      <Area
        yAxisId="seats"
        type="monotone"
        fill="#2e8356"
        stroke="#2e8356"
        dataKey="sold_tickets"
        name="Sold"
      />
    </AreaChart>
  );
}

export default BarChart;
