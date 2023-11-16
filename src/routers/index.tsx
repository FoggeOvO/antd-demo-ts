import React, { ReactNode } from 'react'
import Login from '../pages/Login'

interface IRouter{
    title:string
    path:string
    key:string
    element?:ReactNode
    children?:IRouter[]
}

const routers:IRouter[]=[
    {
        path:'/login',
        title:'登录',
        key:'login',
        element:<Login/>
    }
]

export default routers
