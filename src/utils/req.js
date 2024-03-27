import axios from "axios";

const request = axios.create({
    timeout: 2000, // 超时时间
    headers: {
        'Content-Type' : 'application/json;charset=utf-8'
    }
})

//创建一个响应拦截器,从response中只去除data并返回
request.interceptors.response.use(
    response => {
        return response.data
    }
)

