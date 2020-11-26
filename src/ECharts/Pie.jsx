/*
 * @Author: tangdaoyong
 * @Date: 2020-11-26 09:32:07
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-26 09:41:36
 * @Description: file content
 */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

// echarts相关
import echarts from 'echarts/lib/echarts';
require('echarts/lib/chart/pie');// 引入饼图
require('echarts/lib/component/tooltip');// 引入提示框组件
require('echarts/lib/component/title');// 引入标题组件

const Pie = (() => {

    function initPie() {
        // 基于准备好的dom，初始化echarts实例
        var myEchart = echarts.init(document.getElementById('echarts_pie'));
        // 准备数据
        let optionData = {
            title: {
                text: 'ECharts pie 饼图示例'
            },
            tooltip: {},
            series: {
                type: 'pie',
                data: [
                    { name: 'A', value: 1212 },
                    { name: 'B', value: 2323 },
                    { name: 'C', value: 1919 }
                ]
            }
        };

        // 绘制图表
        myEchart.setOption(optionData);
    }

    useEffect(() => {
        initPie();
    });

    return (
        <div id="echarts_pie" style={{ width: '600px', height: '400px' }}></div>
    );
});

export default hot(Pie);