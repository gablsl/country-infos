import { Col, Divider, Pagination, Row } from 'antd';
import { Country } from './Country';

export function CountriesList() {
  return (
    <Divider>
      <Row>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
        <Col span={6}>
          <Country />
        </Col>
      </Row>
      <Pagination defaultCurrent={1} total={50} align='center' />
    </Divider>
  );
}
