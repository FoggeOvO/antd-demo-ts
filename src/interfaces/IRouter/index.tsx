import  { ReactNode,  } from 'react'


export default interface IRouter {
    title: string
    path: string
    key: string
    auth:boolean
    element?: ReactNode
    children?: IRouter[]
}

