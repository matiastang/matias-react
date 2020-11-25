/*
 * @Author: tangdaoyong
 * @Date: 2020-11-24 17:46:15
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-25 10:38:50
 * @Description: file content
 */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome React</h1>
            </div>
        );
    }
}

export default hot(App);