import { FC, Suspense } from 'react'
import { Breadcrumb, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const Cont: FC = () => {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={[
                { key: 'home', title: 'Home' },
                { key: 'list', title: 'List' },
                { key: 'app', title: 'App' },
            ]} />
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: "80vh",
                }}
            >
                <Suspense fallback={<h2>加载中...</h2>}>
                    <Outlet />
                </Suspense>
            </Content>
        </Layout>
    )
}

export default Cont
