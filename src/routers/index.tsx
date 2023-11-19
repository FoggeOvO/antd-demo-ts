import React, { ReactNode, lazy } from 'react'


const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Page404'))
const App = lazy(() => import('../components/Layouts/App'))
const DashBoard = lazy(() => import('../pages/DashBoard'))
const HrmInfo = lazy(() => import('../pages/Hrm/HrmInfo'))
const BasicSal = lazy(() => import('../pages/Hrm/BasicSal'))
const ChangLog = lazy(() => import('../pages/Hrm/ChangeLog'))
const TestC = lazy(() => import('../pages/TestC'))


interface IRouter {
    title: string
    path: string
    key: string
    element?: ReactNode
    children?: IRouter[]
}

const routers: IRouter[] = [
    {
        path: '/index',
        title: '首页',
        key: 'AppLayout',
        element: <App />,
        children: [
            {
                path: '/index/dashboard',
                title: '管理桌面',
                key: 'DashBoard',
                element: <DashBoard />
            }
        ]
    },
    {
        path: '/hrm',
        title: '人事管理',
        key: 'hrm',
        element: <App />,
        children: [
            {
                path:'/hrm/chg',
                title:'人员信息',
                key:'/hrm/chg',
                element:<ChangLog />
            },
            {
                path:'/hrm/sal',
                title:'人员信息',
                key:'/hrm/sal',
                element:<BasicSal />
            },
            {
                path:'/hrm/info',
                title:'人员信息',
                key:'/hrm/info',
                element:<HrmInfo />
            }
        ]
    },
    {
        path: '/dep',
        title: '组织管理',
        key: 'dep',
        element: <App />
    },
    {
        path: '/att',
        title: '考勤管理',
        key: 'att',
        element: <App />
    },
    {
        path: '/sal',
        title: '考勤管理',
        key: 'sal',
        element: <App />
    },
    {
        path: '/',
        title: '登录',
        key: '/',
        element: <Login />
    },
    {
        path: '/login',
        title: '登录',
        key: 'login',
        element: <Login />
    },
    {
        path: '/404',
        title: '404',
        key: '404',
        element: <Page404 />
    },
    {
        path: '/testc',
        title: 'test',
        key: 'testc',
        element: <TestC />
    }
]



export default routers
