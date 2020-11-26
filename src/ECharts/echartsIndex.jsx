/*
 * @Author: tangdaoyong
 * @Date: 2020-11-26 09:04:52
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-26 09:39:11
 * @Description: file content
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// echarts相关
import Bar from './Bar';
import Pie from './Pie';

// echarts主页
class EchartsHome extends Component {

    render() {
        return (
            <>
                <Bar />
                <Pie />
            </>
        );
    }
}

ReactDOM.render(
    <EchartsHome />,
    document.getElementById('app')
);