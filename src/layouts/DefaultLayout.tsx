import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
