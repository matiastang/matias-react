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
            backgroundColor: '#2c343c',
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            series: {
                type: 'pie',
                roseType: 'angle',
                label: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                },
                itemStyle: {
                    // 设置扇形的颜色
                    color: '#c23531',
                    // 阴影的大小
                    shadowBlur: 200,
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    // 阴影颜色
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    emphasis: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                visualMap: {
                    // 不显示 visualMap 组件，只用于明暗度的映射
                    show: false,
                    // 映射的最小值为 80
                    min: 80,
                    // 映射的最大值为 600
                    max: 600,
                    inRange: {
                        // 明暗度的范围是 0 到 1
                        colorLightness: [0, 1]
                    }
                },
                data: [
                    { name: 'A', value: 1212, itemStyle: {
                        color: '#c23531'
                    } },
                    { name: 'B', value: 2323, itemStyle: {
                        color: '#c23531'
                    } },
                    { name: 'C', value: 1919, itemStyle: {
                        color: '#c23531'
                    } }
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