import React from 'react'
import routers from '../../routers'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'


export default function index() {
  return (
    <div>
       <Routes>
          {routers.map(
            (r)=>{
                return (
                    <Route path={r.path} key={r.key} element={r.element}></Route> 
                )
            }
            )}
       </Routes>
    </div>
  )
}
