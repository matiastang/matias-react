/*
 * @Author: tangdaoyong
 * @Date: 2020-11-25 23:17:49
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-25 23:21:52
 * @Description: file content
 */
var echarts = require('echarts/lib/echarts');
// 引入饼图图
require('echarts/lib/chart/pie');
// 基于准备好的dom，初始化echarts实例
var myEchart = echarts.init(document.getElementById('app'));
// 准备数据
let optionData = {
    title: {
        text: 'ECharts 饼图示例'
    },
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