import { Col, Divider, Pagination, Row } from 'antd';
import { useCountriesData } from '../../utils/useCountriesData';
import { Country } from './Country';

export function CountriesList() {
  const { data } = useCountriesData();

  return (
    <Divider>
      <Row>
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
