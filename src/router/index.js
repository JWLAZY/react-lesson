
// 路由表 : 记录所有的路由信息

import React from 'react';
// router 路由表,包含了多个route(路由规则)
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginView from '../views/login/index';
import RegisterView from '../views/register/index';
import DashBoard from '../views/dashboard/index';

//定义一个组件 写了所有的路由规则
// exact : 在 '/'这个路由下如果不加exact,那么对应的这个组件就会在所有的路由中显示
class CustomRouter extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Page} />
                    <Route path='/login' component={LoginView} />
                    <Route path='/register' component={RegisterView} />
                    <Route path='/dash/:block' component={DashBoard} />
                </div>
            </Router>
        )
    }
}
class Page extends React.Component{
   render(){
       return (
           <div>page</div>
       )
   } 
}
class Page1 extends React.Component{
    render(){
        return (
            <div>page1</div>
        )
    } 
 }
 class Page2 extends React.Component{
    render(){
        return (
            <div>page2</div>
        )
    } 
 }
 // 最简化版本
 const Home = (name) => (
    <div>
      <h2>{name}</h2>
    </div>
  );
// 简化版
const Home1 = (name) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default CustomRouter;
