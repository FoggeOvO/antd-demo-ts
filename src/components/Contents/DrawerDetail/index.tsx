import { Button, Drawer, Space } from 'antd'
import React, { FC, useState } from 'react'

const DrawerDetail: FC = () => {
    //打开抽屉，显示详细信息
    //首先定义一个state,用于控制Drawer得开启和关闭状态
    const [open, setOpen] = useState(false);

    //关闭方法
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                title={'详细信息'}
                placement="right"
                size={'large'}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>编辑</Button>
                        <Button type="primary" onClick={onClose}>
                            保存
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

        </>
    )
}

export default DrawerDetail