import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Card} from 'antd';
import './index.css';
import Router from './src/router/index';

class Test extends React.Component {
    render(){
        return (
            <div>
                <Card title="币币交易" extra={<a href="#">dd</a>} style={{ width: 500 }}>
                </Card>
            </div>

        )
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));