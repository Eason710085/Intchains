import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '产品名称',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: '购买数量',
    dataIndex: 'productNum',
    key: 'productNum',
  },
  {
    title: '收货人',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: '联系电话',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: '收货地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '购买日期',
    dataIndex: 'buyingDate',
    key: 'buyingDate',
  },
  {
    title: '物流状态',
    dataIndex: 'ship',
    key: 'ship',
  },
];

const order = [
  {
    orderId: '1',
    productName: '控制器',
    productNum: '32',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '2',
    productName: '主控板',
    productNum: '312',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '3',
    productName: '控制器底板',
    productNum: '932',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '4',
    productName: '计算板',
    productNum: '642',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '5',
    productName: '风扇',
    productNum: '332',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '6',
    productName: '电源',
    productNum: '323',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '7',
    productName: '控制器',
    productNum: '32',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '8',
    productName: '控制器',
    productNum: '132',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
  {
    orderId: '9',
    productName: '控制器',
    productNum: '732',
    customerName: '张三',
    tel: '17594364758',
    address: '中国上海市浦东新区张江',
    buyingDate: '202107/14',
    ship: '已发货',
  },
];
function MinerOrder() {
  return (
    <Table columns={columns} dataSource={order} />
  );
}

export default MinerOrder;
