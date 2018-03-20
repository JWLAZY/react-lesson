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
        Promise.all([
            get('/user/balance'),
            get('/token/alltoken')
        ])
        .then(datas => {
            let temp = this.state.coin;
            temp.push(datas[0].data);
            datas[1].data.map(d => {
                d.tokeninfo.balance = d.tokeninfo.mybalance;
                temp.push(d.tokeninfo);
            })
            this.setState({
                coin:temp
            })
        })
    }
    render () {
        const columns = [{
            title: '币种',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
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
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          }];
        return (
            <Table columns={columns} dataSource={this.state.coin} />
        )
    }
}
export default RegisterView;
