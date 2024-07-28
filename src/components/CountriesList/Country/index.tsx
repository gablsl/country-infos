import { Button, Divider, Image, Typography } from 'antd';

export function Country() {
  return (
    <Divider orientation='center'>
      <Image
        src='https://flagcdn.com/w320/br.png'
        width={200}
        preview={false}
      />
      <Divider orientation='center'>
        <Typography.Title level={2}>Brazil</Typography.Title>

        <div>
          <div>
            <Typography.Title level={4}>
              Population: <Typography.Text>212559409</Typography.Text>
            </Typography.Title>
          </div>
          <div>
            <Typography.Title level={4}>
              Region: <Typography.Text>America</Typography.Text>
            </Typography.Title>
          </div>
          <div>
            <Typography.Title level={4}>
              Capital: <Typography.Text>Brasília</Typography.Text>
            </Typography.Title>
          </div>
        </div>
        <Button type='primary'>Full information</Button>
      </Divider>
    </Divider>
  );
}
