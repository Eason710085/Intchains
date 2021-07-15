import React from 'react';
import { ColumnChart } from 'bizcharts';
import List from './list';

const data = [
  {
    type: '矿机1',
    number: 1348,
  },
  {
    type: '矿机2',
    number: 2562,
  },
  {
    type: '矿机3',
    number: 2631,
  },
  {
    type: '矿机4',
    number: 2445,
  },
  {
    type: '矿机5',
    number: 2483,
  },
  {
    type: '矿机6',
    number: 2382,
  },
  {
    type: '矿机7',
    number: 2389,
  },
  {
    type: '矿机8',
    number: 2348,
  },
];

const Demo = () => {
  return (
    <><List /><ColumnChart
      data={data}
      title={{
        visible: true,
        text: '矿机库存数量对比图',
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
          alias: '(台)',
        },
      }}
    />
    </>
  );
};

export default Demo;

