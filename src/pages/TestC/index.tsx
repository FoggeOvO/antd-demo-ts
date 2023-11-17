import React from 'react'
import {  Button,message } from 'antd';

export default function index() {

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

      const warning = ()=>{
        message['info']({
            content:'error'
        })
      }
  return (
    <div>
      <Button type='primary' onClick={()=>{showMessage('success')}}>success</Button>
      <Button type='primary' onClick={warning}>warning</Button>
    </div>
  )
}

