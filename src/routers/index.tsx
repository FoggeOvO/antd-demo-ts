import React, { ReactNode, lazy } from 'react'


const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Page404'))
const AppLayout = lazy(() => import('../components/AppLayout'))
const DashBoard = lazy(() => import('../pages/DashBoard'))



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
        element: <AppLayout />,
        children:[
            {
                path: '/index/dashboard',
                title: '首页',
                key: 'DashBoard',
                element: <DashBoard />
            }
        ]
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
    }
]


export default routers
