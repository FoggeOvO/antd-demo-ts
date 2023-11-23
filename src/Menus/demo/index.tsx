import {  lazy } from 'react'


import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
  } from '@ant-design/icons';
  

  const HrmInfo = lazy(() => import('../../pages/Hrm/HrmInfo'))


  export default {
    route: {
      path: '/',
      key: '/',
      children: [
        {
          path: '/welcome',
          name: '欢迎',
          key: '/welcome',
          icon: <SmileFilled />,
          component: './Welcome',
        },
        {
          path: '/hrm',
          name: '人事管理',
          key: '/hrm',
          icon: <CrownFilled />,
          access: 'canAdmin',
          children: [
            {
              path: '/hrm/info',
              name: '人员信息',
              key: '/hrm/info',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
              component: <HrmInfo />,
            },
            {
              path: '/hrm/chg',
              name: '变动日志',
              key: '/hrm/chg',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/hrm/sal',
              name: '调薪记录',
              key: '/hrm/sal',
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
        {
          name: '组织结构',
          icon: <TabletFilled />,
          path: '/dep',
          key: '/dep',
          component: './ListTableList',
          children: [
            {
              path: '/dep/info',
              name: '部门信息',
              key: '/dep/info',
              icon: <CrownFilled />,
            },
            {
              path: '/dep/chg',
              name: '变动信息',
              key: '/dep/chg',
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
        {
            name: '考勤管理',
            icon: <TabletFilled />,
            path: '/att',
            key: '/att',
            component: './ListTableList',
            children: [
              {
                path: '/att/res',
                name: '结果数据',
                key: '/att/res',
                icon: <CrownFilled />,
              },
              {
                path: '/att/imp',
                name: '信息导入',
                key: '/att/imp',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            name: '薪酬管理',
            icon: <TabletFilled />,
            path: '/sal',
            key: '/sal',
            component: './ListTableList',
            children: [
              {
                path: '/sal/base',
                name: '薪资基础',
                key: '/sal/base',
                icon: <CrownFilled />,
              },
              {
                path: '/sal/res',
                name: '薪资计算',
                key: '/sal/res',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
        {
          path: 'https://ant.design',
          name: 'Ant Design 官网外链',
          icon: <ChromeFilled />,
        },
      ],
    },
    location: {
      pathname: '/',
    },
    appList: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'OA',
        desc: 'OA系统',
        url: 'https://oa.imoa.cc',
      },
    ],
  };