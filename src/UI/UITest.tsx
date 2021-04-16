/*
 * @Author: tangdaoyong
 * @Date: 2021-04-15 16:42:15
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-16 14:08:44
 * @Description: file content
 */
import React, { FC, useState } from 'react';
// Input
import LimitInput from './compnents/LimitInput';
import LimitChineseInput from './compnents/LimitChineseInput';

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
        </>
    );
};

export default UITest;