import React, { ReactNode } from 'react'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

interface IRouter{
    title:string
    path:string
    key:string
    element?:ReactNode
    children?:IRouter[]
}

const routers:IRouter[]=[
    {
        path:'/',
        title:'登录',
        key:'/',
        element:<Login/>
    },
    {
        path:'/login',
        title:'登录',
        key:'login',
        element:<Login/>
    },
    {
        path:'/404',
        title:'404',
        key:'404',
        element:<Page404/>
    }
]

export default routers
