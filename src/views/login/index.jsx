import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import './index.css'
const FormItem = Form.Item;
class LoginView extends React.Component {
    render () {
        return (
            <div>
                <Row style={{height: '200px'}}></Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="login-panel">
                    <Form style={{width:'90%',marginLeft:'5%'}}>
                        <FormItem label="用户名">
                            <Input type="text"  placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem label="密码">
                            <Input type="password" placeholder="请输入密码" />
                        </FormItem>
                        <Button type="primary">登陆</Button>
                    </Form>
                    
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}
export default LoginView;
