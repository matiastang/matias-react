/*
 * @Author: tangdaoyong
 * @Date: 2021-04-15 16:49:04
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-16 14:23:55
 * @Description: 限制中文输入
 */
import React, { FC, useEffect, useState } from 'react';
/**
 * 定义props类型
 */
type IProps = React.InputHTMLAttributes<HTMLInputElement>
/**
 * 限制中文输入
 * @returns 
 */
const LimitChineseInput: FC<IProps> = (props: IProps) => {

    /**
     * 输入值
     */
    const [inputValue, setInputValue] = useState(props.value);

    const compositionstart: React.CompositionEventHandler<HTMLInputElement> = (event: React.CompositionEvent<HTMLInputElement>) => {
        console.log('开始输入中文', event.data);
    };

    const compositionupdate: React.CompositionEventHandler<HTMLInputElement> = (event: React.CompositionEvent<HTMLInputElement>) => {
        console.log('正在输入中文', event.data);
    };

    const compositionend: React.CompositionEventHandler<HTMLInputElement> = (event: React.CompositionEvent<HTMLInputElement>) => {
        console.log('结束输入中文', event.data);
    };

    /*
    * 限制中文
    */
    const onChangeValue: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        let oldValue = event.target.value;
        let newValue = oldValue.replace(/[\u4E00-\u9FA5]/g, '');
        console.log(`${oldValue}改变为${newValue}`);
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
        let value = props.value;
        // string | number | readonly string[] | undefined
        if (typeof value === 'string') {
            setInputValue(value.replace(/[\u4E00-\u9FA5]/g, ''));
        }
    }, [props.value]);
    
    return (
        <input
            {
                ...props
            }
            value={inputValue}
            onChange={onChangeValue}
            onCompositionStart={compositionstart}
            onCompositionUpdate={compositionupdate}
            onCompositionEnd={compositionend}
        >
            {
                props.children
            }
        </input>
    );
};
export default LimitChineseInput;