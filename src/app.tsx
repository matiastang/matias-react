/*
 * @Author: tangdaoyong
 * @Date: 2020-11-24 23:00:26
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-20 15:34:58
 * @Description: 入口
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routers/Root';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
    <ConfigProvider locale={ zh_CN }>
        <Root />
    </ConfigProvider>,
    document.getElementById('app')
);