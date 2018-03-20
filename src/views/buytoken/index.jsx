import React from 'react';
import { Card, Row, Col, Form, Input, Button } from 'antd';
// import './index.css'
const FormItem = Form.Item;
class BuyTokenView extends React.Component {
    render () {
        return (
            <div>
                <Card title="购买 token" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}
export default BuyTokenView;
