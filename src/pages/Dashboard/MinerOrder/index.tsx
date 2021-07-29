import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import Logistics from '../MinerLogisticsManage';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

interface DataSourceType {
  id: React.Key;
  createDate?: string;
  name?: string;
  tel?: number;
  departure?: string;
  arrive?: string;
  commodity?: string;
  orderId?: number;
  number?: number;
  shippingFee?: number;
  children?: DataSourceType[];
}


const defaultData: DataSourceType[] = [
  {
    id: '1',
    createDate: '2021/06/11',
    name: '张三',
    tel: 12345678765,
    departure: '中国上海市浦东新区张江',
    arrive: '江苏省苏州市市中心',
    commodity: '电路板',
    orderId: 1222121,
    number: 3,
    shippingFee: 30,
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: Array<ProColumns<DataSourceType>> = [
    {
      title: '日期',
      dataIndex: 'createDate',
      valueType: 'date',
      width: '5%',
    },
    {
      title: '收件人',
      dataIndex: 'name',
      width: '5%',
    },
    {
      title: '联系电话',
      dataIndex: 'tel',
      width: '5%',
    },
    {
      title: '出发地',
      dataIndex: 'departure',
      width: '10%',
    },
    {
      title: '到达地',
      dataIndex: 'arrive',
      width: '10%',
    },
    {
      title: '商品名称',
      dataIndex: 'commodity',
      width: '7%',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
    },
    {
      title: '购买数量',
      dataIndex: 'number',
      width: '6%',
    },
    {
      title: '运费',
      dataIndex: 'shippingFee',
      width: '6%',
    },
    {
      title: '备注',
      dataIndex: 'note',
      width: '6%',
    },
    {
      title: '操作',
      valueType: 'option',
      width: '10%',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <><Logistics />
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="订单管理"
        maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
              position: position as 'top',
              record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
            }
            : false
        }
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(10);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据(Json格式)" headerBordered collapsible defaultCollapsed>
        <ProField
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
