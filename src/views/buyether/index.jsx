import React from 'react';
import { Card, Row, Col, Form, Input, Button,InputNumber } from 'antd';
// import './index.css'
const FormItem = Form.Item;
class BuyEtherView extends React.Component {
    constructor(){
        super();
        this.state = {
            price :100,
            number: 0
        }
    }
    render () {
        const formItemLayout =  {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          } ;
          const buttonItemLayout = {
            wrapperCol: { span: 4, offset: 14 },
          };
        return (
            <div>
                <Card title="购买Ether" extra={<a href="#">More</a>} style={{ width: 450 }}>
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
                        <Input placeholder="请输入购买数量" addonAfter="Ether" onChange={(e)=>{this.setState({number:e.target.value})}} />
                    </FormItem>
                    <FormItem
                        label="Field B"
                        {...formItemLayout}
                        >
                        <Input value={this.state.number * this.state.price} disabled='false' addonAfter='RMB' />
                    </FormItem>
                    <FormItem {...buttonItemLayout} >
                        <Button type="primary">提交</Button>
                    </FormItem>

                </Form>
                </Card>
            </div>
        )
    }
}
export default BuyEtherView;
