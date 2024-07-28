import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Content } from 'antd/es/layout/layout';

export function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
