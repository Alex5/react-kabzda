import React from "react";
import s from './News.module.css';
import { Card, Col, Row } from 'antd';

const News = () => {
    return (
        <div>
            <div style={{padding: '15px'}} className="site-card-wrapper">
                <Row  gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={24}>
                        <Card title="Card title" bordered={false} hoverable>
                            Card content
                        </Card>
                    </Col>
                </Row>

            </div>,
        </div>
    )
}

export default News;