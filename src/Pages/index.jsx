import React from 'react';
import { Card, Col, Row } from 'antd';


export default function Home() {
  return (
    <div className="col-md-12 jumbotron  row  container">
      <div className="card text-white bg-dark col-md-6" style={{ height: '25rem' }}>
        <div className="card-header">Backend</div>
        <div className="card-body">
          <h4 className="card-title">Dark card title</h4>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
          Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
          Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
          Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>


      <div className="card text-white bg-dark col-md-6" style={{ height: '25rem' }}>
        <div className="card-header">Frontend</div>
        <div className="card-body">
          <h4 className="card-title">Dark card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        </div>
      </div>
    </div>
  );
}
