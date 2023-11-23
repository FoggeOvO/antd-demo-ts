import { FC } from 'react'
import { Table } from 'antd'
import DepTree from '../../../components/Contents/DepTree'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const Depinfo: FC = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '16px' }}>
      <div>
        <DepTree />
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  )
}

export default Depinfo