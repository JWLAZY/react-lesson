import React from 'react';
import { Row, Col, Form, Input, Button,Modal, Spin } from 'antd';
import { Table, Icon, Divider } from 'antd';
import {get,post} from '../../comman/network';
const FormItem = Form.Item;
class RegisterView extends React.Component {
    constructor() {
        super();
        this.state = {
            coin:[],
            visible: false,
            loading: false
        }
    }
    componentDidMount(){
        // 同时发起多个请求
        // 多个 请求结束之后再会走then
        Promise.all([
            get('/user/balance'),
            get('/token/alltoken')
        ])
        .then(datas => {
            // datas = [data1,data2]
            let temp = this.state.coin;
            datas[0].data.key = -1;
            temp.push(datas[0].data);
            // alltoken 和 balance返回的数据接口不一样,特殊处理先
            datas[1].data.map(d => {
                d.tokeninfo.balance = d.tokeninfo.mybalance;
                d.tokeninfo.key = d.id;
                d.tokeninfo.address = d.address;
                temp.push(d.tokeninfo);
            })
            this.setState({
                coin:temp
            })
        })
    }
    handleOk(){
        this.setState({loading:true})
        let data = {
            toaddress: this.state.address,
            tokenaddress: this.state.select.address,
            count: this.state.count
        }
        post('/token/transtoaddress',data)
        .then(result => {
            if(result.errcode == 0){
                this.setState({
                    visible: false,
                    loading: false
                });
            }else{
                this.setState({
                    loading: false
                });
            }
        })
    }
    handleCancel(){
        this.setState({
            visible: false
        })
    }
    render () {
        // 表头
        const columns = [{
            title: '币种',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (<a href="#">{text}</a>),
          },{
            title: '标识符',
            dataIndex: 'symbol',
            key: 'symbol',
          },  {
            title: '拥有量',
            dataIndex: 'balance',
            key: 'balance',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a onClick={e=>{this.setState({visible:true,select:record})}}>转账 一 {record.name}</a>
                <Divider type="vertical" />
                <a href="#">买入</a>
              </span>
            ),
          }];
        return [
            <Spin spinning={this.state.loading}>
                <Table columns={columns} dataSource={this.state.coin} />
            </Spin>,
            <Modal
                title="转 币"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                okText="确认"
                cancelText="取消"
                >
                <Input placeholder="对方ether地址" onChange={(e)=>{this.setState({address:e.target.value})}}/>
                <br />
                <Input placeholder="转账数量" onChange={(e)=>{this.setState({count:e.target.value})}} />
            </Modal>
        ]
    }
}
export default RegisterView;
