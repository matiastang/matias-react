/*
 * @Author: tangdaoyong
 * @Date: 2020-11-27 09:41:36
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-27 10:20:04
 * @Description: file content
 */
/*
 * @Author: tangdaoyong
 * @Date: 2020-11-26 09:32:07
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-26 12:42:00
 * @Description: file content
 */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

// echarts相关
import echarts from 'echarts/lib/echarts';
require('echarts/lib/chart/scatter');// 引入点图
require('echarts/lib/component/tooltip');// 引入提示框组件
require('echarts/lib/component/title');// 引入标题组件
require('echarts/lib/component/dataZoom');// 引入dataZoom组件

const Scatter = (() => {

    function initScatter() {
        // 基于准备好的dom，初始化echarts实例
        var myEchart = echarts.init(document.getElementById('echarts_scatter'));
        // 准备数据
        let optionData = {
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 60         // 右边在 60% 的位置。
                },
                {   // 这个dataZoom组件，也控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 60         // 右边在 60% 的位置。
                },
                {
                    type: 'slider',
                    yAxisIndex: 0,
                    start: 30,
                    end: 80
                },
                {
                    type: 'inside',
                    yAxisIndex: 0,
                    start: 30,
                    end: 80
                }
            ],
            series: [
                {
                    type: 'scatter', // 这是个『散点图』
                    itemStyle: {
                        opacity: 0.8
                    },
                    symbolSize: function(val) {
                        return val[2] * 40;
                    },
                    data: [['14.616', '7.241', '0.896'], ['3.958', '5.701', '0.955'], ['2.768', '8.971', '0.669'], ['9.051', '9.710', '0.171'], ['14.046', '4.182', '0.536'], ['12.295', '1.429', '0.962'], ['4.417', '8.167', '0.113'], ['0.492', '4.771', '0.785'], ['7.632', '2.605', '0.645'], ['14.242', '5.042', '0.368']]
                }
            ]
        };

        // 绘制图表
        myEchart.setOption(optionData);
    }

    useEffect(() => {
        initScatter();
    });

    return (
        <div id="echarts_scatter" style={{ width: '600px', height: '400px' }}></div>
    );
});

export default hot(Scatter);
