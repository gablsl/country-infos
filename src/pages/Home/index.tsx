import { Space } from 'antd';
import { Searches } from '../../components/Searches';
import { CountriesList } from '../../components/CountriesList';

export function HomePage() {
  return (
    <Space direction='vertical' size={48}>
      <Searches />
      <CountriesList />
    </Space>
  );
}
