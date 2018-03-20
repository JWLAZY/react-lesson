import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import './index.css'
const FormItem = Form.Item;
class RegisterView extends React.Component {
    render () {
        return (
            <div>
                <Row style={{height: '200px'}}></Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="login-panel">
                    <Form style={{width:'90%',marginLeft:'5%'}}>
                        <FormItem label="手机号">
                            <Input type="text"  placeholder="手机号" />
                        </FormItem>
                        <FormItem label="邮箱">
                            <Input type="text" placeholder="邮箱" />
                        </FormItem>
                        <FormItem label="密码">
                            <Input type="password" placeholder="请输入密码" />
                        </FormItem>
                        <Button type="primary">注册</Button>
                    </Form>
                    
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}
export default RegisterView;
