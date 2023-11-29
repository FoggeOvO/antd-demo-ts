import { useEffect } from 'react'
import { useLocation, useRoutes, Location, useNavigate, NavigateFunction } from "react-router-dom"
import { message } from 'antd';
import IRouter from '../../interfaces/IRouter'

const matchPath = (path: string, routers: IRouter[]): IRouter | null => {
    for (let item of routers) {
        if (item.path === path) {
            return item;
        }
        if (item.children) {
            const childMatch = matchPath(path, item.children);
            if (childMatch) {
                return childMatch;
            }
        }
    }
    
    return null;
}

const guard = (
    location: Location,
    navigate: NavigateFunction,
    routers: IRouter[],
    token: string
) => {
    const {pathname} = location;
    const routeDetail = matchPath (pathname,routers);

    //找不到路由，就跳转404
    if(!routeDetail ){
        navigate('/404')
        return false
    }
    //如果auth:true，则需要权限验证
    if(routeDetail.auth){
        if(!token || token === null) {
            message.error({
                content:"登录超时！"
            })
            navigate('/')
            return false
        }
    }
    
    return true
}

export const RouterGuard = (routers:IRouter[]) => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(()=>{
        guard(location,navigate,routers,token!)
    },[location,navigate,routers,token]);
    const Route = useRoutes(routers);
    return Route;
}
