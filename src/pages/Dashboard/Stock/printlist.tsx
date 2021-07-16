import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '数量',
    dataIndex: 'number',
    key: 'num',
  },
];
const stock = [
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

function PrintList() {
  return (
    <Table columns={columns} dataSource={stock} />
  );
}

export default PrintList;
