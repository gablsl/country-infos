import { FlagOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';

export function Header() {
  return (
    <Layout.Header
      style={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography.Title level={2}>
        <Space>
          <FlagOutlined />
          Which is the country?
        </Space>
      </Typography.Title>
    </Layout.Header>
  );
}
