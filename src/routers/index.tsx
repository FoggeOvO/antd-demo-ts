import {  lazy } from 'react'
import IRouter from '../interfaces/IRouter'


const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Page404'))
const HrmInfo = lazy(() => import('../pages/Hrm/HrmInfo'))
const BasicSal = lazy(() => import('../pages/Hrm/BasicSal'))
const HrmChg = lazy(() => import('../pages/Hrm/HrmChg'))
const Depinfo = lazy(() => import('../pages/Dep/DepInfo'))
const DepChg = lazy(() => import('../pages/Dep/DepChg'))
const ResInfo = lazy(() => import('../pages/Att/ResInfo'))
const ImpData = lazy(() => import('../pages/Att/ImpData'))
const SalBase = lazy(() => import('../pages/Sal/SalBase'))
const SalCal = lazy(() => import('../pages/Sal/SalCal'))
const MainLayout = lazy(() => import('../components/Layouts/MainLayout'))

const TestC = lazy(() => import('../pages/TestC'))


const routers: IRouter[] = [
    {
        path: '/index',
        title: '首页',
        key: 'AppLayout',
        auth:true,
        element: <MainLayout />,
    },
    {
        path: '/welcome',
        title: '欢迎页',
        key: 'welcome',
        auth:true,
        element: <MainLayout />,
    },
    {
        path: '/hrm',
        title: '人事管理',
        key: 'hrm',
        auth:true,
        element: <MainLayout />,
        children: [
            {
                path:'/hrm/chg',
                title:'人员信息',
                key:'/hrm/chg',
                auth:true,
                element:<HrmChg />
            },
            {
                path:'/hrm/sal',
                title:'人员信息',
                key:'/hrm/sal',
                auth:true,
                element:<BasicSal />
            },
            {
                path:'/hrm/info',
                title:'人员信息',
                key:'/hrm/info',
                auth:true,
                element:<HrmInfo />
            }
        ]
    },
    {
        path: '/dep',
        title: '组织管理',
        key: 'dep',
        auth:true,
        element: <MainLayout />,
        children:[
            {
                path: '/dep/info',
                title: '部门信息',
                key: '/dep/info',
                auth:true,
                element: <Depinfo />,
            },
            {
                path: '/dep/chg',
                title: '变动信息',
                key: '/dep/chg',
                auth:true,
                element: <DepChg />,
            }
        ]
    },
    {
        path: '/att',
        title: '考勤管理',
        key: 'att',
        auth:true,
        element: <MainLayout />,
        children: [
            {
                path: '/att/res',
                title: '结果数据',
                key: '/att/res',
                auth:true,
                element: <ResInfo />,
            },
            {
                path: '/att/imp',
                title: '信息导入',
                key: '/att/imp',
                auth:true,
                element: <ImpData />,
            }
        ]
    },
    {
        path: '/sal',
        title: '薪酬管理',
        key: 'sal',
        auth:true,
        element: <MainLayout />,
        children: [
            {
                path: '/sal/base',
                title: '薪资基础',
                key: '/att/res',
                auth:true,
                element: <SalBase />,
            },
            {
                path: '/sal/res',
                title: '薪资计算',
                key: '/sal/res',
                auth:true,
                element: <SalCal />,
            }
        ]
    },
    {
        path: '/',
        title: '登录',
        key: '/',
        auth:false,
        element: <Login />
    },
    {
        path: '/login',
        title: '登录',
        key: 'login',
        auth:false,
        element: <Login />
    },
    {
        path: '/404',
        title: '404',
        key: '404',
        auth:false,
        element: <Page404 />
    },
    {
        path: '/testc',
        title: 'test',
        key: 'testc',
        auth:false,
        element: <TestC />
    }
]



export default routers
