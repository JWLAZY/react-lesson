import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

import MyCoin from '../mycoin/index';
import BuyEtherView from '../buyether/index';
import BuyTokenView from '../buytoken/index';

import {getUserInfo} from '../../comman/userinfo';

let {Header,Content,Footer} = Layout;

// antd = {
//     Layout : {
//         Header: ....,
//         Content: ....,
//         Footer: ...,
//     }
//     Menu: {
//         ....
//     }
// }

import './index.css';
// 布局页面
class DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {
            userinfo: {},
            tel:''
        }
    }
    componentDidMount(){
        let that = this;
        getUserInfo()
        .then(userinfo => {
            console.log(userinfo);
            that.setState({
                userinfo:userinfo.data
            })
        })
    }
    render() {
        // 通过route(规则进入的组件),react-router 会给这个组件的props添加一个match属性
        // 这个属性包含了路由的规则的path 以及实际的路径url
        let blockName = this.props.match.params.block;
        let content;
        let defaultKey;
        switch (blockName) {
            case 'mycoin':
                content = <MyCoin />;
                defaultKey = '3'
                break;
            case 'buyether':
                content = <BuyEtherView />;
                defaultKey = '1'
                break;
            case 'buytoken':
                content = <BuyTokenView />;
                defaultKey = '2'
                break;
            default:
                content = <MyCoin />;
                defaultKey = '3'
                break;
        }
        let userinfo = this.state.userinfo;
        return (
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[defaultKey]}
                        style={{ lineHeight: '64px' ,float:'left'}}
                    >
                        <Menu.Item key="1">
                            <Link to='/dash/buyether'>购买Ether</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/dash/buytoken'>代币交易</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/dash/mycoin'>我的资产</Link>
                        </Menu.Item>
                    </Menu>
                    <div style={{float: 'right',width: 120,height:'31px',lineHeight:'31px',paddingTop:'20px',color:'white'}}>
                        <Link to="/login">{userinfo.tel ? userinfo.tel : '登录'}</Link>
                        /
                        <Link to="/register">注册</Link>
                    </div>
                </Header>
                <Content style={{padding:'0 50px 0 50px'}}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {content}
                    </div>
                </Content>
                <Footer style={{textAlign:'center'}}>
                    create by  kyxy
                </Footer>
            </Layout>
        )
    }
}

export default DashBoard;
