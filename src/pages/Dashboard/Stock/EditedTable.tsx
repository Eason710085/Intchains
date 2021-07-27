import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

interface DataSourceType {
  id: React.Key;
  title?: string;
  number?: number;
  note?: string;
}

const defaultData: DataSourceType[] = [
  {
    id: 15,
    title: '控制器',
    number: 1348,
    note: '',
  },
  {
    id: 23,
    title: '主控板',
    number: 2562,
    note: '',
  },
  {
    id: 33,
    title: '控制器底板',
    number: 2631,
    note: '',
  },
  {
    id: 34,
    title: '计算板',
    number: 2445,
    note: '',
  },
  {
    id: 55,
    title: '风扇',
    number: 2483,
    note: '',
  },
  {
    id: 66,
    title: '电源',
    number: 2382,
    note: '',
  },
  {
    id: 87,
    title: '电源线',
    number: 2389,
    note: '',
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: Array<ProColumns<DataSourceType>> = [
    {
      title: '产品名称',
      dataIndex: 'title',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      width: '30%',
    },
    {
      title: '数量',
      dataIndex: 'number',
    },
    {
      title: '备注',
      dataIndex: 'note',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
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
    <>
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="产品库存"
        maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
              position: position as 'top',
              record: () => ({ id: (Math.random() * 10000).toFixed(0) }),
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
          total: 100,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(100);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="库存数据(Json格式)" headerBordered collapsible defaultCollapsed>
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
