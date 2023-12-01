import type { ActionType, ProColumns, } from '@ant-design/pro-components';
import { ProTable, } from '@ant-design/pro-components';
import { useRef, useEffect, useState, Fragment } from 'react';
import { get } from '../../utils/request';
import { Button, Drawer, Space, Table } from 'antd';
import './index'


interface ColumnItem {
  _id: string;
  dataIndex: string;
  key: string;
  title: string;
  sortkey?: number | 0;
  showInMain?: boolean;
  valueType?: string;
}

interface recordItem {
  _id: String;
  [key: string]: any;
}

const rowSelection = {
  // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
  // 注释该行则默认不显示下拉选项
  selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  defaultSelectedRowKeys: [1],
}

const TestC = () => {
  const actionRef = useRef<ActionType>();
  const [columns, setColumns] = useState<ColumnItem[]>([]);
  const token = localStorage.getItem('token')

  //组件挂载完成后请求数据放入state中
  useEffect(() => {
    get('/api/sys/getcolumns')
      .then((res) =>
        setColumns(res.data.map((item: ColumnItem) => ({
          ...item, align: "center",
          render: (text: string) => <span style={{ fontSize: '12px' }}>{text}</span>,
          title: <span style={{ fontSize: '12px' }}>{item.title}</span>,
        })).sort((a: ColumnItem, b: ColumnItem) => { return (a.sortkey ?? 0) - (b.sortkey ?? 0) }).filter((item: ColumnItem) => { return item.showInMain === true })
        ))
      .catch(reason => console.log(reason))
  }, [token])

  //打开抽屉，显示详细信息
  //首先定义一个state,用于控制Drawer得开启和关闭状态
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  }

  //关闭方法
  const onClose = () => {
    setOpen(false);
  };

  // 单独处理操作列
  const actionColumn: ProColumns<recordItem, string> = {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _) => [
      <Button type="primary"
        key="editable"
        onClick={() => {
          console.log(record.gender);
        }}
      >
        编辑
      </Button>,
      <Button type="primary" key="view"
        onClick={() => {
          showDrawer();
          console.log(record);
        }}>
        查看
      </Button>,
    ],
  };

  return (
    <Fragment>
      <ProTable
        rowSelection={rowSelection}
        columns={[...columns, actionColumn]}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log('@', sort, filter, 'params=', params);
          const msg = await get('/api/user/getusers')
          return {
            data: msg.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: 1,
          };
        }}
        editable={{
          type: 'single',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="_id"
        search={false}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
      />

      <Drawer
        title={'详细信息'}
        placement="right"
        size={'large'}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>编辑</Button>
            <Button type="primary" onClick={onClose}>
              保存
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </Fragment>
  );
};


export default TestC