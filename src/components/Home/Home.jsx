import React, {useEffect, useState} from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Input } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;

const Home = () => {
  const [products, setProducts] = useState(null); 
  useEffect(() => {
    // Fetch products or perform any setup here
    handleFetchProducts();
  }, []);
  const handleFetchProducts = () => {
    // Simulate fetching products from an API
    console.log('Fetching products...');
    fetch('https://localhost:8080/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
  return (
    <Layout>
      <Header>
        <div style={{ float: 'left', color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
          Product Store
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginLeft: 200 }}>
          <Menu.Item key="1"><a href='/home'>Home</a></Menu.Item>
          <Menu.Item key="2"><a href='/products'>Products</a></Menu.Item>
          <Menu.Item key="3"><a href='/contact'>Contact us</a></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '40px 50px', minHeight: '80vh' }}>
        <Title level={2}>Our Products</Title>
        <Search placeholder="Search products" style={{ width: 300, marginBottom: 30 }} />
        <Row gutter={[24, 24]}>
          {products?.map(product => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
                title={product.name}
                extra={<span style={{ fontWeight: 'bold' }}>{product.price}</span>}
              >
                <p>{product.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Product Store. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default Home;