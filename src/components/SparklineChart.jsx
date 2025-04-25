import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const SparklineChart = ({ data }) => {
  const formattedData = data.map((price, index) => ({ value: price, index }));

  return (
    <ResponsiveContainer width={120} height={50}>
      <LineChart data={formattedData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3f8600"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;
