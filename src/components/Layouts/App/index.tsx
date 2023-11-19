import React, { Suspense, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import main from '../../../Menus/main'
import sub from '../../../Menus/menu'
import items from '../../../interfaces/items'

import Left from '../Menu'

const { Header } = Layout;


const AppLayout: React.FC = () => {

  const findKey = (arr: items[], keyToFind: string) => {
    const item = arr.find((menuItem) => menuItem.key === keyToFind);
    return item ? item : null;
  };

  const [menu, setMenu] = useState(sub)


  const navigate = useNavigate();
  const changeRoute = ({ key }: { key: string }) => {
    const mainItem = findKey(main, key)
    const cc = findKey(sub, key)

    if (cc) {
      setMenu(sub.filter((item) => item.key === cc.key));
    }

    if (mainItem) {
      navigate(mainItem.keypath)
    } else {
      navigate('/404')
    }
  }


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
      <Suspense fallback={<h2>加载中...</h2>}>
        <Left menu={menu} />
      </Suspense>
    </Layout>

  );
};

export default AppLayout;