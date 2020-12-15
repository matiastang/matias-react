/*
 * @Author: tangdaoyong
 * @Date: 2020-11-25 23:39:08
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-15 16:18:24
 * @Description: file content
 */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

// echarts相关
import echarts from 'echarts/lib/echarts';
require('echarts/lib/chart/bar');// 引入柱状图
require('echarts/lib/component/tooltip');// 引入提示框组件
require('echarts/lib/component/title');// 引入标题组件

const Bar = (() => {

    function initBar() {
        // 基于准备好的dom，初始化echarts实例
        // *. 做一次类型转换，或者做类型断言
        // let dom = <HTMLInputElement>document.getElementById('infoArea');
        // let dom1 = document.getElementById('infoArea') as HTMLElement;
        let divElement = document.getElementById('echarts_bar') as HTMLDivElement;
        let myEchart = echarts.init(divElement);
        // 绘制图表
        myEchart.setOption({
            title: {
                text: 'ECharts bar 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    useEffect(() => {
        initBar();
    });

    return (
        <div id="echarts_bar" style={{ width: '600px', height: '400px' }}></div>
        // <canvas id="echarts_bar" style={{ width: '600px', height: '400px' }}></canvas>
    );
});

export default hot(Bar);