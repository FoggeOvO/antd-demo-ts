import { get, post } from '../utils/req'
import {UserInfo} from '../interfaces/UserInfo'

export const getToken = async (user : UserInfo) => {
    await post('/api/auth/getToken',user)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data)
            return true
        }
        )
        .catch(error => {
            console.log(error)
            return false
        })
}