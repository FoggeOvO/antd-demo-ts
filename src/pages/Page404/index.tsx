import { Button, Result } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Page404: FC = () => {
    const navigate = useNavigate();
    const backHome = ()=>{
        navigate('/login')
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
        />
    )
}

export default Page404