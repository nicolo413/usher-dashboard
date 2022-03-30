import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Text } from 'recharts';
import { parseDonut } from '../utils/helpers/dashboard';

const DonutChart = ({ weeklyData }: any) => {
  const data = parseDonut(weeklyData);
  const COLORS = ['#0088FEc5', '#00C49Fc5', '#8884d8'];

  console.log(data);
  return (
    <div
      style={{
        marginLeft: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <PieChart width={430} height={350}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d800"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ color: 'darkgrey' }}
          formatter={(value: string) => `${value}€`}
        />
      </PieChart>
      <Text color="white">Revenue per venue</Text>
    </div>
  );
};

export default DonutChart;
