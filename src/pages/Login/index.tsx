import React, { FC } from 'react';
import { Form, Button, Input, Divider, message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { post } from '../../utils/request';
import {  useNavigate } from 'react-router-dom';
import '../../static/css/login.css';

type FieldType = {
  username: string;
  password: string;
};


const Login: FC = () => {

  const formRef = React.useRef<FormInstance>(null);
  const navigate = useNavigate();

  const showMessage = (status: 'success' | 'error' | 'warning') => {
    const messages = {
      success: 'Login Successful!',
      error: 'Username or Password is Incorrect.',
      warning: 'Network Error. Please try again.',
    };
    message[status]({
      content: messages[status],
    });
  };

  const onFinish = () => {
    const formInstance = formRef.current;
    if (formInstance) {
      const userinfo = formInstance.getFieldsValue(['username', 'password']);
      post('/auth/gettoken', userinfo).then(
        (res) => {
          if (res.code === '0000') {
            localStorage.setItem('token',res.data)
            navigate('/index');
            showMessage('success');
          } else {
            showMessage('error');
            console.log('@@@', res);
          }
        },
        (err) => {
          showMessage('warning');
          console.log('@@', err);
        }
      );
    }
  };

  return (
    <div>
      <div id='login-title'>
        <h2>咕噜EHR</h2>
        <p>哎哟~</p>
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
          ref={formRef}
        >
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
