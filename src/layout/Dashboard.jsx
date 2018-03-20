import React from 'react';
import {Layout} from 'antd';

export default class Dashboard extends React.Component {
    render(){
        let temp;
        // console.log(this.props)
        switch (this.props.match.params.comp) {
            case 'test':
                temp = <div>test</div>
                break;
        
            default:
                temp = <div>default</div>
                break;
        }
        return (
            <div>{temp}</div>
        )
    }
}