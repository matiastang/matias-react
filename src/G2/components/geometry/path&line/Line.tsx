import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import { Chart } from '@antv/g2';
import styles from './line.scss';

function Line() {

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

    const Point2Chart = (containerID: string, key: number = 12, count: number = 500) => {

        interface Point2Data {
            [key: string]: any
        }

        let data: Array<Point2Data> = [];

        for (let index = 0; index < count; index++) {
            let month = index % key;
            data.push({
                month: `${month}月`,
                temperature: Math.round(Math.random() * 50)
            });
        }

        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: containerID, // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300 // 指定图表高度
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        chart.point().position('month*temperature');

        // Step 4: 渲染图表
        chart.render();
    };

    const Point3Chart = (containerID: string, key: number = 12, count: number = 500) => {

        interface Point2Data {
            [key: string]: any
        }

        let data: Array<Point2Data> = [];

        for (let index = 0; index < key; index++) {
            let monthData = Array<number>();
            for (let index = 0; index < count; index++) {
                monthData.push(Math.round(Math.random() * 50));
            }
            data.push({
                month: `${index + 1}月`,
                temperature: monthData
            });
        }

        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: containerID, // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300 // 指定图表高度
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        chart.point().position('month*temperature');

        // Step 4: 渲染图表
        chart.render();
    };

    useEffect(() => {
        console.log('G2 Hello');
        Line1Chart('line1');
        // Point2Chart('line2');
        // Point3Chart('line3');
    }, []);

    return (
        <div className={ styles.point }>
            <div id="line1" className={ styles.chart }></div>
            <div id="line2" className={ styles.chart }></div>
            <div id="line3" className={ styles.chart }></div>
        </div>
    );
}

export default hot(Line);