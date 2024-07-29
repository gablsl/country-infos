import { Col, Divider, Pagination, Row } from 'antd';
import { useCountriesData } from '../../utils/useCountriesData';
import { Country } from './Country';
import { Loading } from '../Loading';
import { useState } from 'react';

const PAGE_SIZE = 16;

export function CountriesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useCountriesData();

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedData = data?.slice(startIndex, startIndex + PAGE_SIZE) || [];
  const totalCountries = data?.length || 0;

  if (isLoading) return <Loading />;

  return (
    <Divider>
      <Row gutter={48}>
        {paginatedData?.map((country) => (
          <Col span={6} key={country.name.common}>
            <Country
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flagUrl={country.flags.png}
            />
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={totalCountries}
        onChange={(page) => setCurrentPage(page)}
        align='center'
      />
    </Divider>
  );
}
