import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import {post} from '../../comman/network';
import './index.css'
const FormItem = Form.Item;
class LoginView extends React.Component {
    constructor(){
        super();
        this.state = {
            tel:'',
            password:'',
        }
    }
    // 3步:
    // 1. 保存输入框输入的内容
    // 2. 点击按钮发送网络请求
    // 3. 根据网络请求返回的结果来判断页面如何跳转
    login(){
        post('/user/login',{tel:this.state.tel,password:this.state.password})
        .then(data => {
            console.log(data);
            if(data.errcode == 0){
                localStorage.setItem('token',data.data.token);
                // react-router 会给每一个route 组件添加一个history的属性来做页面跳转
                this.props.history.push('/dash/mycoin');
            }else{
                console.log('登陆失败');
            }
        })
    }
    render () {
        return (
            <div>
                <Row style={{height: '200px'}}></Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="login-panel">
                    <Form style={{width:'90%',marginLeft:'5%'}}>
                        <FormItem label="用户名">
                            <Input type="text"  placeholder="请输入用户名" onChange={(e)=>{this.setState({tel:e.target.value})}}/>
                        </FormItem>
                        <FormItem label="密码">
                            <Input type="password" placeholder="请输入密码" onChange={(e)=>{this.setState({password:e.target.value})}} />
                        </FormItem>
                        <Button type="primary" onClick={this.login.bind(this)}>登陆</Button>
                    </Form>
                    
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
}
export default LoginView;
