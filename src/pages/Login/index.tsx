import {
  LockOutlined,
  UserOutlined,
  GooglePlusOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormInstance, Space } from 'antd';
import type { CSSProperties } from 'react';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../api/dataapi';
import MD5 from 'crypto-js/md5';




const Login: FC = () => {
  const formRef = React.useRef<FormInstance>(null);
  const navigate = useNavigate();



  const onFinish = async () => {
    const formInstance = formRef.current;
    if (formInstance) {
      const user = formInstance.getFieldsValue(['username', 'password']);
      user.password = MD5(user.password).toString()
      await getToken(user)
        .then(res => {
          console.log('@res', res)
          navigate('/index')
        })
        .catch(err => {
          console.log('@err', err)
        })
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
              <GooglePlusOutlined style={iconStyles} />
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