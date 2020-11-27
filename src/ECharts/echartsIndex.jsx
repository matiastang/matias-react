/*
 * @Author: tangdaoyong
 * @Date: 2020-11-26 09:04:52
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-27 09:46:44
 * @Description: file content
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// echarts相关
import Bar from './Bar';
import Pie from './Pie';
import Scatter from './Scatter';

// echarts主页
class EchartsHome extends Component {

    render() {
        return (
            <>
                <Scatter />
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