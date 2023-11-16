import {FC} from 'react'
import routers from '../../routers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const  View:FC = ()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {routers.map(
                        (r) => {
                            return (
                                <Route path={r.path} key={r.key} element={r.element}></Route>
                            )
                        }
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default View;
