import React, { FC, useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import { useToken } from '../../../components/TokenProvider';
import { get } from '../../../utils/request'

const dataSource = [
  {
    key: '1',
    name: '牛德华',
    age: 18,
    address: 'Makati',
  },
  {
    key: '2',
    name: '罗曼卡洛',
    age: 42,
    address: 'Mandaluyong',
  },
];

// const columns = [
//   {
//     title: '姓名',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '年龄',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '住址',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];



const HrmInfo: FC = () => {
  const [columns, setColumns] = useState();
  const { token } = useToken();

  useEffect(() => {
    get('/api/sys/getcolumns', token).then((res) => {
      console.log('@@',res.data)
      setColumns(res.data)
    }, (reason) => { console.log(reason) })
  }, [token])

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const hasSelected = selectedRowKeys.length > 0;

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };


  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>

      <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />;
    </div>
  )
}


export default HrmInfo