import axios from "axios";
import { message as msg } from 'antd';


const getMessage = (code: number) => {
    const message: { [key: number]: string } = {
        601: 'token为null',
        603: '没有权限',
    }
    msg.info(message[code]);
    return message[code] || '未知错误';
}

const request = axios.create({
    timeout: 2000, // 超时时间
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

//创建一个响应拦截器,从处理响应数据
request.interceptors.response.use(
    //请求成功则返回response.data
    response => {
        console.log('@@error222',response.data)
        //根据返回的code统一处理错误
        const { code } = response.data
        console.log('@@error333',code)
        if (code != 200) {
            console.log('if@@',response.data)
            switch (code) {
                case 601:
                    getMessage(601)
                    break
                case 603:
                    getMessage(603)
                    break
            }
        }
        console.log('req@@',response.data)
        return response.data
    },
    //请求失败则返回一个reject的Promise对象
    error => {
        if (error && error.response) {
            console.log('@@error',error.response.msg)
        }
        return Promise.reject(error);
    }
)


export const get = (url: string, params?: any) => {
    return request({
        url,
        method: 'get',
        data: params
    })
}

export const post = (url: string, params: any) => {
    console.log('@@error111')
    return request({
        url,
        method: 'post',
        data: params
    })
}

export const put = (url: string, params: any) => {
    return request({
        url,
        method: 'put',
        data: params
    })
}

export const del = (url: string, params: any) => {
    return request({
        url,
        method: 'delete',
        data: params
    })
}