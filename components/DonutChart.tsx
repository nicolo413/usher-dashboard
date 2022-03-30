import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { parseDonut } from '../utils/helpers/dashboard';
import { Text } from 'native-base';

const DonutChart = ({ weeklyData }: any) => {
  const data = parseDonut(weeklyData);
  const COLORS = ['#0088FEa5', '#00C49Fbf', '#8884bf'];

  return (
    <div
      style={{
        height: '100%',
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
          outerRadius={130}
          innerRadius={90}
          fill="#00000000"
          stroke="#000000"
          strokeWidth={'3'}
          paddingAngle={1}
          // stroke
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
      <Text fontSize={'lg'} mt="2" color="white">
        Weekly revenue per event
      </Text>
    </div>
  );
};

export default DonutChart;
