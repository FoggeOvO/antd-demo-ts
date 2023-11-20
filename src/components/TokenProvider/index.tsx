import  { FC, ReactNode, useContext, useState,createContext } from 'react'


interface TokenProviderProps {
  children: ReactNode;
}

const TokenContext =  createContext<{ token: string; saveToken: (newToken: string) => void }>({
  token: "",
  saveToken: () => {},
})

export const TokenProvider: FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>("")

  const saveToken = (newToken: string) => {
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, saveToken }}>
      {children}
    </TokenContext.Provider>
  )
}


export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};