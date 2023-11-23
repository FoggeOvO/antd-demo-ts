import {FC} from 'react'
import routers from '../../routers'
import { useRoutes } from 'react-router-dom'
import {RouterGuard} from '../RouterGuard'
import { nanoid } from 'nanoid';
  



const  View:FC = ()=>{
    RouterGuard(routers)
    const element = useRoutes(routers)
    return (
        <div key={nanoid()}>
            {element}
        </div>
    )
}

export default View;
