import React, { FC, useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import { get } from '../../../utils/request'
import { nanoid } from 'nanoid';

const HrmInfo: FC = () => {

  const [columns, setColumns] = useState();
  const [data, setData] = useState();
  const token = localStorage.getItem('token')

  useEffect(() => {
    get('/api/sys/getcolumns')
      .then((res) => {
        setColumns(res.data);
        // 获取到表的字段后，在获取明细数据
        get('/api/user/getusers')
          .then((res) => {
            setData(res.data);
          })
          .catch((reason) => {
            console.error('Error request user data:', reason);
          });
      })
      .catch((reason) => {
        console.error('Error request columns data:', reason);
      });
  }, [token]);

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
      <div key={nanoid()} style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>

      <Table rowSelection={rowSelection} dataSource={data} columns={columns} key={nanoid()}/>
    </div>
  )
}


export default HrmInfo