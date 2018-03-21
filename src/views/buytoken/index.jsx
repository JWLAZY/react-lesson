import React from 'react';
import { Card, Row, Col, Form, Input, Button ,Select} from 'antd';
const Option = Select.Option;
// import './index.css'
const FormItem = Form.Item;
class BuyTokenView extends React.Component {
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
                <Card title="交易 token" extra={<a href="#">More</a>} style={{ width: 500 }}>
                <Form layout='horizontal' >
                    <FormItem
                        label="交易类型"
                        {...formItemLayout}
                        >
                        <Select defaultValue="in" style={{ width: 120 }} onChange={()=>{}}>
                            <Option value="in">买入</Option>
                            <Option value="out">卖出</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        label="代币数量"
                        {...formItemLayout}
                        >
                        <Input placeholder="输入代币数量"  addonAfter="MT"/>
                    </FormItem>
                    <FormItem
                        label="Ether数量"
                        {...formItemLayout}
                        >
                        <Input placeholder="输入Ether数量" addonAfter="Ether" />
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
export default BuyTokenView;
