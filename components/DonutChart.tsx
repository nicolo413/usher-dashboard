import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { parseDonut } from '../utils/helpers/dashboard';
import { Text } from 'native-base';

const DonutChart = ({ weeklyData }: any) => {
  const data = parseDonut(weeklyData);
  const COLORS = ['#0088FEc5', '#00C49Fc5', '#8884d8'];

  return (
    <div
      style={{
        marginLeft: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <PieChart width={430} height={300}>
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
      <Text fontSize={'lg'} mt="4" color="white">
        Weekly revenue per event
      </Text>
    </div>
  );
};

export default DonutChart;
