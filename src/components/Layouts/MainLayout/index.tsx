import {
  LogoutOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { useState, Suspense,startTransition } from 'react';
import defaultProps from '../../../Menus/main';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Dropdown, Spin } from 'antd';

const MainLayout = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/welcome');
  
  const navigate = useNavigate()

  const logout = ()=>{
    startTransition(()=>{
      navigate('/')
      localStorage.removeItem('token')
    })
  }

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' 
      }}
    >
      <ProLayout
        siderWidth={256}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          style:{ backgroundColor: "#7265e6", verticalAlign: "middle"},
          gap:4,
          size:"large",
          title: localStorage.getItem('lastname'),
          render:(_,dom)=>{
            return (
              <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick:logout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
            )
          }
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <LogoutOutlined key='LogoutOutlined' onClick={logout}/>, 
          ];
        }}
        menuItemRender={(item, dom) => (
          <Link key={pathname} to={item.path ?? '/'}
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </Link>
        )}
        {...settings}
      >
        <PageContainer >
          <Suspense  fallback={<Spin/>}>
            <Outlet />
          </Suspense>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default MainLayout