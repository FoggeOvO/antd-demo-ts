import { useToken } from '../components/TokenProvider';

export const useRequireAuth = () => {
  const { token } = useToken();
  console.log(token)
  // 在这里使用 token 进行认证逻辑
  return token ? true : false;
};