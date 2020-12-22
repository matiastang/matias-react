import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import { Chart } from '@antv/g2';
// import styles from './line.scss';

function Area() {

    const Line1Chart = (containerID: string) => {

        const data = [
            { month: '一月', temperature: [-5, 10], city: '北京' },
            { month: '二月', temperature: [3, 12], city: '南京' }
        ];

        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: containerID, // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300 // 指定图表高度
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        chart.line().position('month*temperature').color('city');

        // Step 4: 渲染图表
        chart.render();
    };

    useEffect(() => {
        console.log('G2 Hello');
        Line1Chart('area1');
    }, []);

    return (
        // <div className={ styles.point }>
        //     <div id="area1" className={ styles.chart }></div>
        // </div>
        <></>
    );
}

export default hot(Area);