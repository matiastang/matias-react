/*
 * @Author: tangdaoyong
 * @Date: 2021-04-16 09:53:58
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-16 13:38:02
 * @Description: 过滤输入
 */
import React, { FC, useEffect, useState } from 'react';
/**
 * 过滤函数声明
 */
interface filterFunc {
    (value: string): string;
}
/**
 * 定义props类型
 */
type IProps = {
    filterValue?: filterFunc
} & React.InputHTMLAttributes<HTMLInputElement>
/**
 * 限制中文输入
 * @returns 
 */
const LimitInput: FC<IProps> = (props: IProps) => {

    /**
     * 输入值
     */
    const [inputValue, setInputValue] = useState(props.value);

    /*
    * onChange
    */
    const onChangeValue: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        let oldValue = event.target.value;
        let newValue =  oldValue;
        // 判断是否存在过滤函数
        let filterInputValue = props.filterValue;
        if (filterInputValue !== undefined) {
            newValue = filterInputValue(oldValue);
        }
        // console.log(`${oldValue}改变为${newValue}`);
        // 内容变化
        if (oldValue !== inputValue) {
            setInputValue(newValue);
            // 输入了中文
            if (oldValue !== newValue) {
                event.target.value = newValue;
            }
        }
        // 向上传递
        let propsOnChange = props.onChange;
        if (propsOnChange === undefined) {
            return;
        }
        propsOnChange(event);
    };

    /**
     * 动态设置输入框内容
     */
    useEffect(() => {
        _propsValueChange();
    }, [props.value]);

    /**
     * 输入框内容响应props.value变化
     */
    const _propsValueChange = () => {
        let value = props.value;
        // string | number | readonly string[] | undefined
        if (typeof value === 'string') {
            // 判断是否存在过滤函数
            let filterInputValue = props.filterValue;
            if (filterInputValue === undefined) {
                setInputValue(value);
            } else {
                let newValue = filterInputValue(value);
                setInputValue(newValue);
            }
        }
    };

    /**
     * 动态设置过滤函数
     */
    useEffect(() => {
        console.log('过滤函数改变');
        _propsFilterValueChange();
    }, [props.filterValue]);

    /**
     * 输入框内容响应props.filterValue变化
     */
    const _propsFilterValueChange = () => {
        // 目前输入类型判断
        if (typeof inputValue !== 'string') {
            return;
        }
        // 判断是否存在过滤函数
        let filterInputValue = props.filterValue;
        if (filterInputValue === undefined) {
            return;
        }
        console.log(props.filterValue);
        let newValue = filterInputValue(inputValue);
        if (newValue !== inputValue) {
            setInputValue(newValue);
        }
    };
    
    return (
        <input
            {
                ...props
            }
            value={inputValue}
            onChange={onChangeValue}
        >
            {
                props.children
            }
        </input>
    );
};
export default LimitInput;