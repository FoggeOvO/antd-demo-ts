import React, { FC } from 'react'
import { Form, Button, Input, Divider } from 'antd'
import { FormInstance } from 'antd/lib/form';
import '../../static/css/login.css'
import { post } from '../../utils/request';

type FieldType = {
    username: string
    password: string
}

const Login: FC = () => {
    //1.通过ref获取表单提交的数据username和password
    const formRef = React.useRef<FormInstance>(null)
    const onFinish = () => {
        const formInstance = formRef.current
        if (formInstance) {
            const userinfo = formInstance.getFieldsValue(['username', 'password'])
            post('/auth/gettoken', userinfo).then(res => {
                console.log(res)
            }, err => {console.log(err)})
        }
    }

    //2.发送请求，验证用户名和密码是否正确


    return (
        <div>
            <div id='login-title'>
                <h2>登录</h2>
            </div>
            <Divider plain></Divider>
            <div id='login-from'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={onFinish}
                    ref={formRef}>
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type='text' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input type='password' />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;