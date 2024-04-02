import { get, post } from '../utils/req'
import {UserInfo} from '../interfaces/UserInfo'
import {show} from '../utils/msg'



export const getToken = async (user : UserInfo) => {
    return post('/api/auth/getToken',user)
        .then( res => {
            const token = res.data
            if(token === null || token === undefined){
                show(500,'account or password is incorrect')
                throw new Error('token 找不到')
            }
            show(200,'success')
            localStorage.setItem('token', token)
                return token
        }
        )
        .catch(error => {
            console.log(error)
            throw error
        })
}