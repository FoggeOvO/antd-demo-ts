import { ProList } from '@ant-design/pro-components';
import { Avatar, Button, Tag } from 'antd';
import type { Key } from 'react';
import { useEffect, useState } from 'react';
import './index.less'
import { HrmDataTpye } from '../../interfaces/HrmDataTpye';
import DepTree from '../../components/Contents/DepTree';
import DrawerDetail from '../../components/Contents/DrawerDetail';
import HrmInfoModal from '../../components/Contents/HrmInfoModal';
import { get } from '../../utils/request'

const TestC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  const [dataSource, setDataSource] = useState<HrmDataTpye[]>()
  const [info, setInfo] = useState<HrmDataTpye>()

  const [depids,setDepids] = useState([])

  const getuserByDepid = async (depids: []) => {
    const newData = await get('/api/user/getuserByDepid', { "depids": depids })
    console.log(newData)
    return newData
  }

  useEffect(() => {
    //定义订阅函数，参数msg为订阅的消息名，data为订阅的消息体
    const depInfoSubscriber = async (_: string, data: []) => {
      const newData = await getuserByDepid(data)
      setDataSource(newData.data)
      setDepids(data)
    }
    //订阅消息
    PubSub.subscribe('depInfo', depInfoSubscriber)
    //卸载组件后移除订阅
    return () => {
      PubSub.unsubscribe(depInfoSubscriber)
    }
  }, []);

  const handleDataChange = (newInfo: HrmDataTpye) => {
    setDataSource(prevState => {
      return prevState?.map(item => item._id === newInfo._id ? { ...item, ...newInfo } : item)
    })
  }

  //打开抽屉，显示详细信息
  //首先定义一个state,用于控制Drawer得开启和关闭状态
  const [open, setOpen] = useState(false);
  const showDrawer = (item: HrmDataTpye) => {
    setInfo(item)
    setOpen(true);
  }

  //关闭方法
  const onClose = () => {
    setOpen(false);
  };

  //用于新增数据时
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const searchConfig = {
    collapsed: false, // 初始是否折叠搜索栏
    optionRender: () => {
      // 自定义搜索栏右侧的操作按钮
      return [
        <Button key="search" type="primary">
          测试
        </Button>,
        <Button key="reset">
          重置
        </Button>,
      ];
    },
    onSearch: () => {
      // 搜索回调函数
      console.log('搜索值：');
    },
    onReset: () => {
      // 重置回调函数
      console.log('重置搜索栏');
    },
    // 其他配置项...
  };


  return (
    <div id='mainpage' style={{ display: 'flex', flexDirection: 'column', height: '100%', }}>
      <div id='listpage-head' style={{ height: '15%', width: '100%' }}></div>
      <div id='listpage-body' style={{ display: 'flex', flexDirection: 'row', height: '70%', margin: 'auto', width: '100%' }}>
        <div id='listpage-bodyleft' style={{ flex: 1, marginRight: '10px', alignItems: 'flex-start' }}>
          <DepTree />
        </div>
        <div id='listpage-bodycontent' style={{ flex: 3, flexBasis: 'auto', height: '100%', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
          <ProList style={{ height: '100%' }}
            toolBarRender={() => {
              return [
                <Button key="3" type="primary" onClick={showModal}>
                  新建
                </Button>,
              ];
            }}
            search={searchConfig}
            metas={{
              title: {
                title: '人员查询'
              },
              description: {
                render: (_, item) => {
                  return (
                    <div key={item._id}>
                      <Tag>{item.gender}</Tag>
                      <Tag>{item.workcode}</Tag>
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
                    {item.lastname.substring(0, 1)}
                  </Avatar>
                },
                search: false
              },
              actions: {
                render: (_, item) => {
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

      <DrawerDetail open={open} onClose={onClose} info={info} handleDataChange={handleDataChange} />
      <HrmInfoModal open={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} depids={depids}/>
    </div>
  );
};

export default TestC