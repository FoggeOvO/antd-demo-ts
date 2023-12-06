import { ProList } from '@ant-design/pro-components';
import { Avatar, Button, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';
import DepTree from '../../components/Contents/DepTree';
import './index.less'
import DrawerDetail from '../../components/Contents/DrawerDetail';

const dataSource = [
  {
    key: 1,
    group: 'SSC',
    division: '人事部',
    position: 'OA管理师',
    title: 'Pie',
    level: 'P3',
  },
  {
    key: 2,
    group: 'SSC',
    division: '人事部',
    position: 'OA开发高级工程师',
    title: 'Rogers',
    level: 'P5',
  },
  {
    key: 3,
    group: 'SSC',
    division: '人事部',
    position: 'OA开发高级工程师',
    title: 'Beck',
    level: 'P5',
  },
  {
    key: 4,
    group: 'SSC',
    division: '人事部',
    position: 'OA经理',
    title: 'Judy',
    level: 'M3',
  },
  {
    key: 5,
    group: 'SSC',
    division: '人事部',
    position: 'OA开发',
    title: 'Fegie',
    level: 'P3',
  },
  {
    key: 6,
    group: 'SSC',
    division: '人事部',
    position: 'OA管理师',
    title: 'Rechal',
    level: 'M1',
  },
  {
    key: 7,
    group: 'SSC',
    division: '人事部',
    position: 'OA开发',
    title: 'Levi',
    level: 'P3',
  },
];

interface infoType {
  key: number;
  group: string;
  division: string;
  position: string;
  title: string;
  level: string;
}

interface SourceData {
  key: number;
  group: string;
  division: string;
  position: string;
  title: string;
  level: string;
}

const TestC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };


  //打开抽屉，显示详细信息
  //首先定义一个state,用于控制Drawer得开启和关闭状态
  const [open, setOpen] = useState(false);
  const [info,setInfo] = useState<SourceData>()
  const showDrawer = (item:infoType) => {
    setInfo(item)
    setOpen(true);
  }

  //关闭方法
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div id='mainpage' style={{ display: 'flex' ,flexDirection: 'column', height: '100%', }}>
      <div id='listpage-head' style={{  height: '15%' }}></div>
      <div id='listpage-body' style={{ display:'flex', flexDirection:'row' , height: '70%' }}>
        <div id='listpage-bodyleft' style={{ flex: 1, marginRight: '10px', alignItems: 'flex-start', height: 'auto', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
          <DepTree />
        </div>
        <div id='listpage-bodycontent' style={{ flex: 3, flexBasis: 'auto', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
          <ProList
            toolBarRender={() => {
              return [
                <Button key="3" type="primary">
                  新建
                </Button>,
              ];
            }}
            search={{
              filterType: 'light',
            }}
            metas={{
              title: {
                title: '人员查询'
              },
              description: {
                render: (_, item) => {
                  return (
                    <div key={item.key}>
                      <Tag>{item.group}</Tag>
                      <Tag>{item.division}</Tag>
                      <Tag>{item.position}</Tag>
                      <Tag>{item.level}</Tag>
                    </div>
                  );
                },
                search: false
              },
              avatar: {
                render: (_, item) => {
                  return <Avatar
                    style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }}
                    size="large"
                    gap={4}>
                    {item.title}
                  </Avatar>
                },
                search: false
              },
              actions: {
                render: (_,item) => {
                  return [<Button type="link" key="view"
                    onClick={() => {
                      showDrawer(item);
                    }}>
                    查看
                  </Button>];
                },
              },
            }}
            rowKey="title"
            rowSelection={rowSelection}
            dataSource={dataSource}
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
            }}
          />
        </div>
      </div>
      <div id='listpage-foot' style={{ flexDirection: 'column', height: '15%' }}></div>

      <DrawerDetail open={open} onClose={onClose} info={info}/>
    </div>
  );
};

export default TestC