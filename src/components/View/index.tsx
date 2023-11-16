import {FC} from 'react'
import routers from '../../routers'
import { useRoutes } from 'react-router-dom'


const  View:FC = ()=>{
    const element = useRoutes(routers)
    return (
        <div>
            {element}
        </div>
    )
}

export default View;
