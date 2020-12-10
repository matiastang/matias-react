/*
 * @Author: tangdaoyong
 * @Date: 2020-12-10 09:55:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-10 10:28:09
 * @Description: WebGL 主页
 */
import React from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import WEBGL1 from './components/WebGL1';
import WEBGL2 from './components/WebGL2';
import WEBGL3 from './components/WebGL3';

function Home() {
    return (
        <>
            <WEBGL1 />
            <WEBGL2 />
            <WEBGL3 />
        </>
    );
}

export default hot(Home);