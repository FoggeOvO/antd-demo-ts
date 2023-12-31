import {FC} from 'react'
import routers from '../../routers'
import { useRoutes } from 'react-router-dom'
import {RouterGuard} from '../RouterGuard'


const  View:FC = ()=>{
    RouterGuard(routers)
    const element = useRoutes(routers)
    return (
        <div style={{height:'100%'}}>
            {element}
        </div>
    )
}

export default View;
