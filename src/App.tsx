import { FC } from 'react'
import 'antd/dist/reset.css'
import View from './components/View'
import { TokenProvider } from './components/TokenProvider'



const App: FC = () => {
  return (
    <div>
      <TokenProvider>
        <View />
      </TokenProvider>
    </div>
  );
}

export default App;
