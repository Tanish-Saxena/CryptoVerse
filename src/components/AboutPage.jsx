import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <div>
      <Title level={2}>About Our Cryptocurrency App</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <img
            src="/path/to/your/app/logo.png"
            alt="Cryptocurrency App Logo"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Paragraph>
            Welcome to our cryptocurrency app! We are dedicated to providing you with the latest
            information and tools to help you navigate the world of cryptocurrencies.
          </Paragraph>
          <Paragraph>
            Our app allows you to:
            <ul>
              <li>Track real-time cryptocurrency prices.</li>
              <li>View detailed information about individual cryptocurrencies.</li>
              <li>Explore cryptocurrency exchanges and markets.</li>
              {/* Add more features here */}
            </ul>
          </Paragraph>
          <Paragraph>
            Whether you're a seasoned crypto investor or just getting started, our goal is to
            empower you with the knowledge and resources you need to make informed decisions in
            this exciting and rapidly evolving space.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
