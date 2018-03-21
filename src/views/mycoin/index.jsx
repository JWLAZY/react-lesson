import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Table, Icon, Divider } from 'antd';
import {get,post} from '../../comman/network';
const FormItem = Form.Item;
class RegisterView extends React.Component {
    constructor() {
        super();
        this.state = {
            coin:[]
        }
    }
    componentDidMount(){
        // 同时发起多个请求
        // 多个 请求结束之后再会走then
        Promise.all([
            get('/user/balance'),
            get('/token/alltoken')
        ])
        //{"errcode":0,"data":{"name":"以太币","symbol":"Ether","balance":"850.989394418000000009"}}
        //
        .then(datas => {
            // datas = [data1,data2]
            let temp = this.state.coin;
            datas[0].data.key = -1;
            temp.push(datas[0].data);
            // alltoken 和 balance返回的数据接口不一样,特殊处理先
            datas[1].data.map(d => {
                d.tokeninfo.balance = d.tokeninfo.mybalance;
                d.tokeninfo.key = d.id;
                temp.push(d.tokeninfo);
            })
            this.setState({
                coin:temp
            })
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
                <a href="#">卖出 一 {record.name}</a>
                <Divider type="vertical" />
                <a href="#">买入</a>
              </span>
            ),
          }];
        return (
            <Table columns={columns} dataSource={this.state.coin} />
        )
    }
}
export default RegisterView;
