/*
 * @Author: matiastang
 * @Date: 2022-09-30 17:08:52
 * @LastEditors: matiastang
 * @LastEditTime: 2022-10-08 16:17:12
 * @FilePath: /matias-react/src/UI/compnents/ParagraphExpand/index.tsx
 * @Description: 省略文本展开
 */
import React, { memo, useState, useEffect } from 'react'
import { Typography } from 'antd'

const { Paragraph } = Typography

type ParagraphExpandType = {
    /**
     * 内容
     */
    content: string
    /**
     * 收起展开的行数（默认为1行）
     */
    rows?: number
    // TODO: - 提示文字，默认为“展开”和“收起”，应该支持受控
    // collapse?: string
}

const ParagraphExpand: React.FC<ParagraphExpandType> = (props) => {

    const { rows } = props

    const [paragraphRows, setParagraphRows] = useState(1)
    const [fold, setFold] = useState(false)
    const [key, setKey] = useState(0)

    useEffect(() => {
        if (rows === undefined) {
            return
        }
        if (rows < 0) {
            console.warn('rows为正整数')
            return
        }
        setParagraphRows(rows)
    }, [rows])

    const onExpand = () => {
        setFold(true)
    }

    const onCollapse = (e: any) => {
        e.preventDefault()
        setFold(false)
        setKey(key + 1)
    }

    return <>
        <div key={key}>
            <Paragraph ellipsis={{ rows: paragraphRows, expandable: true, onExpand: onExpand }}>
                { props.content || '--'}
            </Paragraph>
        </div>
        {
            fold && <a href=":;" onClick={ onCollapse }>{ fold ? '收起' : '展开' }</a>
        }
    </>
}

export default memo(ParagraphExpand)