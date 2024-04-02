import { message as msg } from 'antd';

//1.给出一个show方法,根据接收到的code决定消息等级，content为消息内容

export const show = (code:number,content:string) => {
    switch (code){
        case 200:
            msg.success(content,2)
            break
        case 500:
            msg.error(content,2)
            break
        case 300:
            msg.info(content,2)
            break
        default: msg.info(content,2)
    }
}