import React from 'react';
import { ColumnChart } from 'bizcharts';
import PrintList from './printlist';

const data = [
  {
    type: '控制器',
    number: 1348,
  },
  {
    type: '主控板',
    number: 2562,
  },
  {
    type: '控制器底板',
    number: 2631,
  },
  {
    type: '计算板',
    number: 2445,
  },
  {
    type: '风扇',
    number: 2483,
  },
  {
    type: '电源',
    number: 2382,
  },
  {
    type: '电源线',
    number: 2389,
  },
];

const Demo = () => {
  return (
    <><PrintList /><ColumnChart
      data={data}
      title={{
        visible: true,
        text: '',
      }}
      autoFit
      padding="auto"
      xField="type"
      yField="number"
      meta={{
        type: {
          alias: '类别',
        },
        sales: {
          alias: '(个)',
        },
      }}
    />
    </>
  );
};

export default Demo;

