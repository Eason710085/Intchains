import React from 'react';
import { message, Card } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDatePicker,
} from '@ant-design/pro-form';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Logistics = () => {
  return (
    <Card>
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async () => {
          await waitTime(10);
          message.success('提交成功');
        }}
        params={{}}
        request={async () => {
          await waitTime(10);
          return {
            name: '',
            useMode: 'chapter',
          };
        }}
      >
        <ProForm.Group>
          <ProFormDatePicker
            width="md"
            name="date"
            label="日期"
          />
          <ProFormText
            width="md"
            name="name"
            label="收件人"
            placeholder="请输入收件人"
          />
          <ProFormText
            width="md"
            name="tel"
            label="联系电话"
            placeholder="请输入收件人电话"
          />
          <ProFormText
            width="md"
            name="shipAddr"
            label="出发地"
            placeholder="请输入地点"
          />
          <ProFormText
            width="md"
            name="ordrAddr"
            label="到达地"
            placeholder="请输入地点"
          />
          <ProFormText
            width="md"
            name="type"
            label="商品名称"
            placeholder="请输入商品名称"
          />
          <ProFormText
            width="md"
            name="orderId"
            label="物流单号"
            placeholder="请输入物流单号"
          />
          <ProFormText
            width="md"
            name="number"
            label="商品数量"
            placeholder="请输入商品数量"
          />
          <ProFormText
            width="md"
            name="fare"
            label="运费"
            placeholder="请输入运费"
          />
          <ProFormText
            width="md"
            name="note"
            label="备注"
            placeholder="备注"
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Logistics;