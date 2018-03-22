import React from 'react';
import { Card, Row, Col, Form, Input, Button, InputNumber,message,Spin } from 'antd';
import {get, post} from '../../comman/network';
const FormItem = Form.Item;

class BuyEtherView extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 100,
            number: 0,
            loading: false,
            test: {
                test1: {
                    name:23
                }
            }
        }
    }
    buyEther(){
        if(this.state.price * this.state.number > this.props.userinfo.balance){
            message.error('余额不足',2);
        }else{
            this.setState({loading:true})
            post('/user/buycoin',{count:this.state.number})
            .then(data => {
                this.setState({loading:false})
                if(data.errcode === 0){
                    message.info("购买成功:" + data.data.blockHash,2);
                }else{
                    message.error(data.errmsg,2);
                }
            })
        }
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
        };
        const buttonItemLayout = {
            wrapperCol: { span: 4, offset: 14 },
        };
        return (
            <div>
                <Spin spinning={this.state.loading}>        
                <Card title="购买Ether" extra={"余额:" + this.props.userinfo.balance + 'RMB'} style={{ width: 450 }}>
                    <Form layout='horizontal' >
                        <FormItem
                            label="单价"
                            {...formItemLayout}
                        >
                            <Input value='100RMB' disabled='false' />
                        </FormItem>
                        <FormItem
                            label="购买数量"
                            {...formItemLayout}
                        >
                            <Input placeholder="请输入购买数量" addonAfter="Ether" onChange={(e) => { this.setState({ number: e.target.value }) }} />
                        </FormItem>
                        <FormItem
                            label="总价"
                            {...formItemLayout}
                        >
                            <Input value={this.state.number * this.state.price} disabled='false' addonAfter='RMB' />
                        </FormItem>
                        <FormItem {...buttonItemLayout} >
                            <Button type="primary" onClick={this.buyEther.bind(this)}>提交</Button>
                        </FormItem>
                    </Form>
                </Card>
                </Spin>
            </div>
        )
    }
}
export default BuyEtherView;
