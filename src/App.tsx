import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
