import { FC, startTransition } from 'react'
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Logout: FC = () => {
    const navigator = useNavigate()

    const doLogout = ()=>{
        startTransition(() => {
            localStorage.removeItem('token');
            navigator('/');
        });
    }
  return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: '15px' }} icon={<UserOutlined />} />
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                onClick={doLogout}
            />
        </div>
    )
}

export default Logout