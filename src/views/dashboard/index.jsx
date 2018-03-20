import React from 'react';
import {Layout, Menu} from 'antd';

import {Link} from 'react-router-dom';

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
    render() {
        // 通过route(规则进入的组件),react-router 会给这个组件的props添加一个match属性
        // 这个属性包含了路由的规则的path 以及实际的路径url
        console.log(this.props);
        let blockName = this.props.match.params.block;
        let content;
        switch (blockName) {
            case 'myblock':
                content = <div>我的资产</div>;
                break;
            case 'buyether':
                content = <div> 购买ether</div>;
                break;
            case 'buytoken':
                content = <div> 购买token</div>;
                break;
            default:
                content = <div>我的资产</div>;
                break;
        }
        return (
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
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
