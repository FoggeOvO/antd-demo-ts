import { useEffect } from "react"
import {getuserByDepid} from '../../api/dataapi'


const TestC = () => {
  useEffect(()=>{
    getuserByDepid([2,3,4,5,6,7,8,9,10,11,12,13])
    .then(data => console.log(data))
    .catch(err => console.log(err))

  },[])
 

  return (
    <div>

    </div>
  )
}


export default TestC