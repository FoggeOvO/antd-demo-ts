import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result, notification } from 'antd';

const BuildPage: React.FC = () => {

    const openNotification = () => {
        notification.info({
            message: '系统通知:',
            description:
                '当前页面开发ing~',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <>
            <Result
                icon={<SmileOutlined />}
                title="coming soon~~"
                extra={<Button type="primary" onClick={openNotification}>Next</Button>}
            />
        </>
    )
}


export default BuildPage;