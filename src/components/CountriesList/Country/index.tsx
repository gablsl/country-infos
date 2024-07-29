import { Button, Divider, Image, Typography } from 'antd';

type CountryType = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flagUrl: string;
};

export function Country({
  name,
  population,
  region,
  capital,
  flagUrl,
}: CountryType) {
  return (
    <Divider orientation='center'>
      <Image src={flagUrl} width={200} preview={false} />
      <Divider orientation='center'>
        <Typography.Title level={2}>{name}</Typography.Title>

        <div>
          <div>
            <Typography.Title level={4}>
              Population: <Typography.Text>{population}</Typography.Text>
            </Typography.Title>
          </div>
          <div>
            <Typography.Title level={4}>
              Region: <Typography.Text>{region}</Typography.Text>
            </Typography.Title>
          </div>
          <div>
            <Typography.Title level={4}>
              Capital: <Typography.Text>{capital}</Typography.Text>
            </Typography.Title>
          </div>
        </div>
        <Button type='primary'>Full information</Button>
      </Divider>
    </Divider>
  );
}
