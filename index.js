import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// 导出antd Card 组件
import {Card,Row,Col} from 'antd';
// 如果用 export default 导出的组件 可以用任意名称接收
import Router from './src/router/index'
// 导入全局样式
import './index.css';

class HelloWorld extends React.Component {
    // render 方法 是这个组价渲染时走的方法,这个方法的最后return 的内容是渲染的内容
    render(){
        // 可以继续一些业务逻辑处理
        let message = "hello" + "孔壹学院"
        // 在html 标签中要使用js变量/常量/方法/逻辑 都需要用{} 括起来
        // 旧版 return 只能返回一个节点,节点里面可以放其他节点
        // 新版 可以返回一个html标签数组
        // react 标签分两种 
        // 1. html 标签 小写
        // 2. react标签(组件) 首字母大写,打包器根据首字母大小写来判断是否需要编译
        // 如果首字母大写 在打包时会调用这个组件的render方法
        return [
            <div> {message} hello </div>,
            <Card title="你好" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>,
            <Row style={{height:'100px'}}></Row>,
            <Row align='middle' >
                <Col span={8}></Col>
                <Col span={8}>登陆</Col>
                <Col span={8}></Col>
            </Row>
        ]
    }
}


// render 需要两个参数 : 组件, 要显示的位置
ReactDOM.render(<Router />, document.getElementById('root'));

// 1. ReactDOM.reader
// 2. 对要显示的组件实例化
// 3. 组件的实例调用render获取要显示的内容 => (<div> hello 孔壹学院 </div>)
// 4. ReactDOM.render放方法将组件render 的结果渲染到 id 为 root 的 div.
