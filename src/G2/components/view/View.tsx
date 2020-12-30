import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import { fetch_GET_JSON } from 'services';
import styles from './view.scss';

function G2View() {

    const view1Chart = (containerID: string) => {

        const data = [{ from: [1, 2] }, { to: [1, 2] }];

        // step 1: 需要创建 chart 对象
        const chart = new Chart({
            container: containerID,
            autoFit: false,
            width: 1000,
            height: 500
        });

        // step 2: 然后创建一个视图
        const view = chart.createView({
            region: {
                start: { x: 0.2, y: 0.2 }, // 指定该视图绘制的起始位置，x y 为 [0 - 1] 范围的数据
                end: { x: 1, y: 1 } // 指定该视图绘制的结束位置，x y 为 [0 - 1] 范围的数据
            },
            padding: [20, 40] // 指定视图的留白
        });

        // Step 2: 载入数据源
        view.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        view.polygon().position('from*to').color('price').label('price', {
            offset: -2
        });

        // Step 4: 渲染图表
        chart.render();
    };

    const view2Chart = (containerID: string) => {
        let url = 'https://gw.alipayobjects.com/os/antvdemo/assets/data/candle-sticks.json';
        // const JSON = function() {
        //     return {
        //         end: 8.32,
        //         max: 8.33,
        //         min: 7.98,
        //         money: 14723.56,
        //         start: 8.18,
        //         time: "2015-11-19",
        //         volumn: 1810
        //     };
        // };

        interface TYPE {
            end: number;
            max: number;
            min: number;
            money: number;
            start: number;
            time: string;
            volumn: number;
        }
        // const obj: Partial<TYPE> = { end: 0 };
        fetch_GET_JSON<Array<TYPE>>(url)
                .then((data: TYPE[]) => {
                    console.log(data);
                    // 设置状态量，时间格式建议转换为时间戳，转换为时间戳时请注意区间
                    const ds = new DataSet();
                    const dv = ds.createView();
                    dv.source(data)
                            .transform({
                                type: 'map',
                                callback: obj => {
                                    obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
                                    obj.range = [obj.start, obj.end, obj.max, obj.min];
                                    return obj;
                                }
                            });
                    const chart = new Chart({
                        container: containerID,
                        autoFit: true,
                        width: 600,
                        height: 400,
                        padding: [10, 40, 40, 40]
                    });
                    chart.scale({
                        time: {
                            type: 'timeCat',
                            range: [0, 1],
                            tickCount: 4
                        },
                        trend: {
                            values: ['上涨', '下跌']
                        },
                        volumn: { alias: '成交量' },
                        start: { alias: '开盘价' },
                        end: { alias: '收盘价' },
                        max: { alias: '最高价' },
                        min: { alias: '最低价' },
                        range: { alias: '股票价格' }
                    });
                    chart.tooltip({
                        showTitle: false,
                        showMarkers: false,
                        itemTpl: '<li class="g2-tooltip-list-item" data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}{value}</li>'
                    });

                    const kView = chart.createView({
                        region: {
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0.7 }
                        }
                    });
                    kView.data(dv.rows);
                    kView.schema()
                            .position('time*range')
                            .color('trend', (val: string) => {
                                if (val === '上涨') {
                                    return '#f04864';
                                }

                                if (val === '下跌') {
                                    return '#2fc25b';
                                }

                                return '#000000';
                            })
                            .shape('candle')
                            .tooltip('time*start*end*max*min', (time, start, end, max, min) => {
                                return {
                                    name: time,
                                    value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
            + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
            + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
            + '<span style="padding-left: 16px">最低价：' + min + '</span>'
                                };
                            });

                    const barView = chart.createView({
                        region: {
                            start: { x: 0, y: 0.7 },
                            end: { x: 1, y: 1 }
                        }
                    });
                    barView.data(dv.rows);
                    barView.scale('volumn', {
                        tickCount: 2
                    });
                    barView.axis('time', {
                        tickLine: null,
                        label: null
                    });
                    barView.axis('volumn', {
                        label: {
                            formatter: val => {
                                return +val / 1000 + 'k';
                            }
                        }
                    });
                    barView.interval()
                            .position('time*volumn')
                            .color('trend', (val: string) => {
                                if (val === '上涨') {
                                    return '#f04864';
                                }

                                if (val === '下跌') {
                                    return '#2fc25b';
                                }

                                return '#000000';
                            })
                            .tooltip('time*volumn', (time, volumn) => {
                                return {
                                    name: time,
                                    value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
                                };
                            });

                    chart.render();
                });

    };

    useEffect(() => {
        console.log('G2 View Hello');
        view1Chart('view1');
        view2Chart('view2');
    }, []);

    return (
        <div className={ styles.point }>
            <div id="view1" className={ styles.chart }></div>
            <div id="view2" className={ styles.chart }></div>
        </div>
    );
}

export default G2View;