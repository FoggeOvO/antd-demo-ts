import axios from "axios";
import { message as msg } from 'antd';


const getMessage = (code: number) =>{
    const message : {[key : number] : string} = {
        601:'token为null',
        603:'没有权限',
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
        return response.data
    },
    //请求失败则进行统一错误代码处理
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 601:
                    getMessage(601)
                    break
                case 603:
                    getMessage(603)
                    break
            }
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