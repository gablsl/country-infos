import { Col, Divider, Pagination, Row } from 'antd';
import { useCountriesData } from '../../utils/useCountriesData';
import { Country } from './Country';
import { Loading } from '../Loading';

export function CountriesList() {
  const { data, isLoading } = useCountriesData();

  if (isLoading) return <Loading />;

  return (
    <Divider>
      <Row gutter={[0, 48]}>
        {data?.map((country) => (
          <Col span={6}>
            <Country
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flagUrl={country.flags.png}
            />
          </Col>
        ))}
      </Row>
      <Pagination defaultCurrent={1} total={50} align='center' />
    </Divider>
  );
}
