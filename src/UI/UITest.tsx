/*
 * @Author: tangdaoyong
 * @Date: 2021-04-15 16:42:15
 * @LastEditors: matiastang
 * @LastEditTime: 2022-10-09 11:12:31
 * @Description: file content
 */
import React, { FC, useState } from 'react';
// Input
import LimitInput from './compnents/LimitInput';
import LimitChineseInput from './compnents/LimitChineseInput';
// 省略文本
import ParagraphExpand from './compnents/ParagraphExpand'
// import ParagraphsExpand from './compnents/ParagraphsExpand'

/**
 * UI测试
 * @returns 
 */
const UITest: FC = () => {

    /*
    * UI测试
    */
    /*
    * 限制中文输入测试
    */
    const [limitChineseInputValue, setLimitChineseInputValue] = useState('placeholder123请输入');
    /**
     * 改变限制中文输入默认值
     * @param event 
     */
    const changeLimitChineseInputValue: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        setLimitChineseInputValue(limitChineseInputValue === 'placeholder123请输入' ? 'change placeholder123请输入' : 'placeholder123请输入');
    };

    /**
     * 限制中文输入内容变化
     * @param event 
     */
    const limitChineseInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`限制中文输入内容=${event.target.value}`);
    };

    /*
    * 过滤输入测试
    */
    // 保存
    const [limitInputValue, setLimitInputValue] = useState('placeholder过滤默认输入1');
    /**
     * 改变限制中文输入默认值
     * @param event 
     */
    const changeLimitInputValue: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        setLimitInputValue(limitInputValue === 'placeholder过滤默认输入1' ? 'change placeholder过滤默认输入2' : 'placeholder过滤默认输入1');
    };

    /**
     * 限制中文输入内容变化
     * @param event 
     */
    const limitInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`过滤输入内容=${event.target.value}`);
    };
    // 过滤函数一
    const _filterInitFunc = (value: string) => {
        console.log(`过滤函数一(过滤中文)${value}`);
        return value.replace(/[\u4E00-\u9FA5]/g, '');
    };
    // 过滤函数二
    const _filterFunc = (value: string) => {
        console.log(`过滤函数二(过滤数字)${value}`);
        return value.replace(/[0-9]/g, '');
    };
    // 过滤函数
    const [filterType, setFilterType] = useState(false);

    /**
     * 改变过滤函数
     * @param event 
     */
    const changeLimitFilterFunc = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('改变过滤函数');
        setFilterType((value) => {
            console.log(value ? '过滤中文' : '过滤数字');
            return !value;
        });
    };

    const test = '阿里丢啊很嗲好看安理会的卡换卡的<br/>说起手机界的昔日高管，不得不提魅族前副总李楠和杨柘这一对“烂兄烂弟”了。先来说下李楠，他曾是某科技媒体主笔，因为一篇文章被黄章赏识收归麾下。而杨柘曾是华为Mate7系列的操刀人，帮助华为在高端手机市场取得了意外的成功。<br/>后来魅族因为内斗和外部竞争等多重因素，导致企业陷入危机，李楠和杨柘双双离职，就连黄章的心腹白永祥都因魅族Pro7系列大败而引咎辞职。但是江湖上早已没有了老白的声音（估计退休了），却还有李楠和杨柘的动静。<br/>'

    return (
        <>
            {/* Input测试 */}
            <>
                {/* 限制中文输入 */}
                <LimitChineseInput
                    name="password"
                    // type="password"
                    placeholder="请输入非中文内容"
                    value={limitChineseInputValue}
                    onChange={limitChineseInputChange}
                    style={{
                        width: '200px',
                        height: '60px'
                    }}
                />
                <button onClick={changeLimitChineseInputValue}>改变限制中文输入的内容</button>
            </>
            <>
                {/* 过滤输入 */}
                <LimitInput
                    name="password"
                    // type="password"
                    placeholder="请输入非中文内容"
                    value={limitInputValue}
                    onChange={limitInputChange}
                    // filterValue={(value: string) => {
                    //     if (filterType) {
                    //         return _filterFunc(value);
                    //     }
                    //     return _filterInitFunc(value);
                    // }}
                    filterValue={filterType ? _filterFunc : _filterInitFunc}
                    style={{
                        width: '200px',
                        height: '60px'
                    }}
                />
                <button onClick={changeLimitInputValue}>改变过滤输入的内容</button>
                <button onClick={changeLimitFilterFunc}>改变输入过滤函数</button>
            </>
            {/* <ParagraphExpand content="据多家俄媒报道，当地时间8日清晨，在横跨刻赤海峡的克里米亚大桥铁路上，一节装有燃料的火车油罐车厢发生爆炸，引发火灾，多节货运车厢受损。目前大桥上的铁路和公路交通暂时中断，刻赤海峡航运正常。事故救援调查工作已经展开。据最新消息，俄新社报道称，刻赤海峡大桥遭导弹袭击，引发火灾。俄新社援引克里米亚官员的话说，大火没有造成人员伤亡。乌克兰国际文传电讯社报道称，乌武装部队空军新闻处称，刻赤海峡大桥铁路支线的燃料罐发生严重火灾，部分道路受损。就刻赤海峡大桥紧急事件，俄罗斯总统普京下令成立政府委员会。克里米亚官员称，受损的大桥路段将被修复，乌方应对此承担责任。" rows={2}></ParagraphExpand> */}
            {/* <ParagraphsExpand content={test} rows={3}></ParagraphsExpand> */}
            {/* <ParagraphsExpand content={
                test.split('<br/>').filter((item) => item.trim())
            } rows={3}></ParagraphsExpand> */}
        </>
    );
};

export default UITest;