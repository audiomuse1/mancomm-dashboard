import React from 'react';
import Chart, { Series, CommonSeriesSettings, ArgumentAxis, ValueAxis, Legend } from 'devextreme-react/chart';

function MyChart() {
  const data = [
    { year: 1990, value: 1 },
    { year: 1991, value: 2 },
    { year: 1992, value: 3 },
    // Add more data as needed
  ];

  return (
    <Chart dataSource={data} title="Sample Chart">
      <CommonSeriesSettings type="line" argumentField="year" valueField="value" />
      <Series name="Value" />
      <ArgumentAxis title="Year" />
      <ValueAxis title="Value" />
      <Legend visible={false} />
    </Chart>
  );
}

export default MyChart;