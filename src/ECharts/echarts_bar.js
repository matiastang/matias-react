/*
 * @Author: tangdaoyong
 * @Date: 2020-11-25 22:53:40
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-25 23:12:40
 * @Description: file content
 */
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
// 基于准备好的dom，初始化echarts实例
var myEchart = echarts.init(document.getElementById('app'));
// 绘制图表
myEchart.setOption({
    title: {
        text: 'ECharts 入门示例'
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