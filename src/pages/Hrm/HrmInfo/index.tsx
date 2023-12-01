import type { ActionType, } from '@ant-design/pro-components';
import { ProTable, } from '@ant-design/pro-components';
import { useRef, useEffect, useState } from 'react';
import { get } from '../../../utils/request';
import { Table } from 'antd';
import './index'


interface ColumnItem {
  _id: string;
  dataIndex: string;
  key: string;
  title: string;
  sortkey?: number | 0;
  showInMain?:boolean;
}

const rowSelection = {
  // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
  // 注释该行则默认不显示下拉选项
  selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  defaultSelectedRowKeys: [1],
}

const HrmInfo = () => {
  const actionRef = useRef<ActionType>();
  const [columns, setColumns] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    get('/api/sys/getcolumns')
      .then((res) => setColumns(
        res.data.map((item: ColumnItem) => ({
          ...item, align: "center",
          render: (text: string) => <span style={{ fontSize: '12px' }}>{text}</span>,
          title: <span style={{ fontSize: '12px' }}>{item.title}</span>,
        }))
          .sort((a: ColumnItem, b: ColumnItem) => { return (a.sortkey ?? 0) - (b.sortkey ?? 0)}).filter((item :ColumnItem)=>{return item.showInMain === true })
      ))
      .catch(reason => console.log(reason))
  }, [token])

  return (
    <ProTable
      rowSelection={rowSelection}
      columns={columns}
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
  );
};


export default HrmInfo