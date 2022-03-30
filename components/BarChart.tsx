import React from 'react';
import {
  Area,
  XAxis,
  AreaChart,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { parseLineGraph } from '../utils/helpers/dashboard';

function BarChart({ weeklyData }: { weeklyData: any }) {
  const parsedData = parseLineGraph(weeklyData);
  return (
    <AreaChart
      width={840}
      height={300}
      data={parsedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>

      <XAxis dataKey="name" tick={false} />
      <YAxis
        yAxisId="seats"
        orientation="left"
        label={{
          value: 'Tickets',
          angle: -90,
          position: 'center',
        }}
      />
      <Tooltip contentStyle={{ color: 'darkgrey' }} />
      <Legend />
      <Area
        yAxisId="seats"
        type="monotone"
        fill="url(#colorUv)"
        stroke="#8884d8"
        dataKey="seats"
        name="Tickets Offered"
      />
      <Area
        yAxisId="seats"
        type="monotone"
        fill="url(#colorPv)"
        stroke="#82ca9d"
        dataKey="sold_tickets"
        name="Tickets Sold"
      />
    </AreaChart>
    // </ResponsiveContainer>
  );
}

export default BarChart;
