import { useEffect } from 'react'
import { getDept, getToken } from '../../api/dataapi';
import { UserInfo } from '../../interfaces/UserInfo'
import MD5 from 'crypto-js/md5';

const TestC = () => {
  const user: UserInfo = {
    username: 'admin',
    password: '123456'
  }
  user.password = MD5(user.password).toString()

  useEffect(() => {
    getDept()
      .then(result => {
        console.log(result)
      })
      .catch(result => {
        console.log(result)
      })
  }, [])

  return (
    <div>

    </div>
  )
}


export default TestC