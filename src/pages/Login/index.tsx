import {
  LockOutlined,
  UserOutlined,
  GooglePlusOutlined ,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormInstance, Space, message } from 'antd';
import type { CSSProperties } from 'react';
import React,{FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../api/dataapi';
import { post } from '../../utils/request';
import MD5 from 'crypto-js/md5';


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


  const onFinish = async () => {
    const formInstance = formRef.current;
    if (formInstance) {
      const user = formInstance.getFieldsValue(['username', 'password']);
      user.password = MD5(user.password).toString()
      // const result = getToken(user);
      // if(result) navigate('/index');


     await post('/api/auth/getToken', user).then(
        (res) => {
          if (res.code === 200) {
            console.log(res)
            localStorage.setItem('token',res.data)
            // localStorage.setItem('lastname',res.user.lastname)
            // localStorage.setItem('lastname',res.user.workcode)
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



  const iconStyles: CSSProperties = {
    marginInlineStart: '16px',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };

  return (
    <ProConfigProvider hashed={false}>
      <div >
        <LoginForm
          
          title="OA-EHR"
          subTitle="人事托管平台"
          onFinish={onFinish}
          formRef={formRef}
          actions={
            <Space>
              其他登录方式
              <GooglePlusOutlined  style={iconStyles} />
            </Space>
          }
        >
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
            
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
  
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
        
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
           
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Login