import React from 'react';
import { Card, Row, Col, Form, Input, Button, Select, message, Spin } from 'antd';
import { get, post } from '../../comman/network';
const Option = Select.Option;
// import './index.css'
const FormItem = Form.Item;
class BuyTokenView extends React.Component {
    constructor() {
        super();
        this.state = {
            token: [],
            loading: false,
            selectToken: {},
            typeid: '0',
        }
    }
    componentDidMount() {
        this.setState({loading:true})
        get('/token/alltoken')
            .then(data => {
                this.setState({loading:false})
                if (data.errcode === 0) {
                    this.setState({token:data.data})
                } else {
                    message.error(data.errmsg, 3);
                }
            })
    }
    // 挂单
    addOrder(){
        let {typeid,tokencount,ethercount,selectToken} = this.state;
        let body = {
            tokenid: selectToken.id,
            count: tokencount,
            ethercount: ethercount,
            typeid: typeid
        }
        post('/user/addorder',body)
        .then(data => {
            if (data.errcode === 0) {
                message.info(data.data.msg,3);
            } else {
                message.error(data.errmsg, 3);
            }
        })
    }
    changeToken(e){
        this.setState({
            selectToken:this.state.token[e]
        })
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        };
        const buttonItemLayout = {
            wrapperCol: { span: 4, offset: 14 },
        };
        let tokens = (<Select style={{ width: 70 }} onChange={this.changeToken.bind(this)} >
                        {this.state.token.map((token,index)=>{
                            return <Option value={index}>{token.tokeninfo.symbol}</Option>
                        })}
                    </Select>)
        let stoken = this.state.selectToken;
        let cardExtra = ''
        if(stoken.tokeninfo){
            cardExtra = "剩余" + stoken.tokeninfo.mybalance + ' ' + stoken.tokeninfo.symbol;
        }else{
            cardExtra = "";
        }
        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <Card title="交易 token" extra={cardExtra} style={{ width: 500 }}>
                        <Form layout='horizontal' >
                            <FormItem
                                label="交易类型"
                                {...formItemLayout}
                            >
                                <Select defaultValue="0" style={{ width: 120 }} onChange={(e) => {console.log(e);this.setState({typeid:e})}}>
                                    <Option value="0">买入</Option>
                                    <Option value="1">卖出</Option>
                                </Select>
                            </FormItem>
                            <FormItem
                                label="代币数量"
                                {...formItemLayout}
                            >
                                <Input placeholder="输入代币数量" addonAfter={tokens} onChange={e=>{this.setState({tokencount:e.target.value})}} />
                            </FormItem>
                            <FormItem
                                label="Ether数量"
                                {...formItemLayout}
                            >
                                <Input placeholder="输入Ether数量" addonAfter="Ether" onChange={e=>{this.setState({ethercount:e.target.value})}}/>
                            </FormItem>
                            <FormItem {...buttonItemLayout} >
                                <Button type="primary" onClick={this.addOrder.bind(this)}>提交</Button>
                            </FormItem>

                        </Form>
                    </Card>
                </Spin>
            </div>
        )
    }
}
export default BuyTokenView;
