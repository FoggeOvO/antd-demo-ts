import { FC, Suspense } from 'react'
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cont from '../Cont';
import items from '../../../interfaces/items'
const { Sider } = Layout;

interface LeftProps {
  menu: items[];
}


const Hrm: FC<LeftProps> = ({ menu }) => {
  console.log(menu[0].key)


  const navigate = useNavigate();
  const changeRoute = ({ key }: { key: string; keyPath: string[] }) => {
    navigate(key);
  }

  return (
    <Layout>
      <Sider >
        <Menu
          mode="inline"
          openKeys={[menu[0].key]}
          style={{ height: '100%', borderRight: 0 }}
          items={menu}
          onClick={changeRoute}
        >
        </Menu>
      </Sider>

      <Suspense fallback={<h2>加载中...</h2>}>
        <Cont />
      </Suspense>

    </Layout>
  )
}

export default Hrm