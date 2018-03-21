import React from 'react';
import { Row, Col, Form, Input, Button,message } from 'antd';
import {get,post} from '../../comman/network';
import './index.css'
const FormItem = Form.Item;
class RegisterView extends React.Component {
    constructor(){
        super();
        this.state = {
            tel:'',
            email:'',
            password:'',
        }
        message.config({
            top: 100,
            duration: 2,
          });
    }
    register(){
        let {tel,email,password} = this.state;
        let data = {
            tel,email,password
        }
        let that = this;
        post('/user/register',data)
        .then(data=>{
            
            if(data.errcode == 0){
                message.info(data.data.message,2,()=>{
                    that.props.history.push('/login');
                });
            }else{
                message.error(data.errmsg);
            }
        })
        .catch(error => {
            message.error(error.message)
        })
    }
    render () {
        return (
            <div>
                <Row style={{height: '200px'}}></Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="register-panel">
                    <Form style={{width:'90%',marginLeft:'5%'}}>
                        <FormItem label="手机号">
                            <Input type="text"  placeholder="手机号" onChange={e=>this.setState({tel:e.target.value})} />
                        </FormItem>
                        <FormItem label="邮箱">
                            <Input type="text" placeholder="邮箱" onChange={e=>this.setState({email:e.target.value})} />
                        </FormItem>
                        <FormItem label="密码">
                            <Input type="password" placeholder="请输入密码" onChange={e=>this.setState({password:e.target.value})} />
                        </FormItem>
                        <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
                    </Form>
                    
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}
export default RegisterView;
