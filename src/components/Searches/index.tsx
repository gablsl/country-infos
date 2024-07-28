import { Dropdown, Input, Space, Typography, type MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export function Searches() {
  const items: MenuProps['items'] = [
    {
      label: 'Africa',
      key: '0',
    },
    {
      label: 'America',
      key: '1',
    },
    {
      label: 'Asia',
      key: '2',
    },
    {
      label: 'Europe',
      key: '3',
    },
    {
      label: 'Oceania',
      key: '3',
    },
  ];

  return (
    <Space direction='horizontal' size='large'>
      <Input.Search
        placeholder='Enter a country'
        enterButton='Search'
        style={{ width: '1680px' }}
      />

      <Dropdown
        menu={{ items, selectable: true, defaultSelectedKeys: ['0'] }}
        trigger={['click']}
      >
        <Typography.Link>
          <Space>
            <Space>Filter by region</Space>
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </Space>
  );
}
