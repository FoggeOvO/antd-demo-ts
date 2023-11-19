import React from 'react';
import { Breadcrumb,Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import left from '../../Menus/menu'
import main from '../../Menus/main'


const { Header, Content, Sider } = Layout;


const TestC: React.FC = () => {
  const navigate = useNavigate();
  const changeRoute = ({ key, keyPath }: { key: string; keyPath: string[] }) => {
    console.log(key, keyPath)
    navigate(key);
  }


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu style={{ width: '100%' }}
          theme="dark" mode="horizontal"
          defaultOpenKeys={['01']}
          defaultSelectedKeys={['01']}
          items={main}
          onClick={changeRoute}
        />
      </Header>

      <Layout>
      <Sider style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['0101']}
          defaultOpenKeys={['01']}
          style={{ height: '100%', borderRight: 0 }}
          items={left}
          onClick={changeRoute}
        >
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} items={[
          { key: 'home', title: 'Home' },
          { key: 'list', title: 'List' },
          { key: 'app', title: 'App' },
        ]} />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        </Content>
      </Layout>
    </Layout>

    </Layout>

  );
};

export default TestC;