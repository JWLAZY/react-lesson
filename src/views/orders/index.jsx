import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Table, Icon, Divider } from 'antd';
import {get,post} from '../../comman/network';
const FormItem = Form.Item;
class OrderView extends React.Component {
    constructor() {
        super();
        this.state = {
            orders:[]
        }
    }
    componentDidMount(){
        get('/user/orders')
        .then(datas => {
            this.setState({
                orders:datas.data
            })
        })
    }
    render () {
        // 表头
        const columns = [{
            title: '类型',
            dataIndex: 'type',
            key: 'type',
          },{
            title: '订单状态',
            dataIndex: 'orderstatus',
            key: 'orderstatus'
          },{
            title: 'Ether数量',
            dataIndex: 'ethercount',
            key: 'ethercount',
            render: (text) => (<a href="#">{text}</a>),
          },{
            title: '代币数量',
            dataIndex: 'count',
            key: 'count',
          },  {
            title: '代币',
            dataIndex: 'tokenaddress',
            key: 'tokenaddress',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="#">取消订单</a>
              </span>
            ),
          }];
        return (
            <Table columns={columns} dataSource={this.state.orders} />
        )
    }
}
export default OrderView;
