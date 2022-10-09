/*
 * @Author: matiastang
 * @Date: 2022-09-30 17:08:52
 * @LastEditors: matiastang
 * @LastEditTime: 2022-10-09 12:35:00
 * @FilePath: /matias-react/src/UI/compnents/ParagraphsExpand/index.tsx
 * @Description: 省略文本展开
 */
import React, { memo, useMemo, useState, useRef, useEffect, useCallback } from 'react'
import styles from './index.less'

const paragraphLine = (text: string, width: number, lineHeight: number, unit: string = 'px') => {
    const paragraphDiv = document.createElement('div')
    paragraphDiv.style.width = width + unit
    paragraphDiv.style.lineHeight = lineHeight + unit
    paragraphDiv.innerHTML = text

    const node = document.body.appendChild(paragraphDiv)
    const nodeHeight = node.offsetHeight

    const line = Math.ceil(nodeHeight / lineHeight)

    document.body.removeChild(node)

    return line
}

type ParagraphExpandType = {
    /**
     * 内容
     * 1.当内容为string时，separator有效
     * 2.当内容为string[]时，separator无效
     */
    content: string | string[]
    /**
     * 分割符，默认为'<br/>'
     */
    separator?: string
    /**
     * 收起展开的行数（默认为2行）
     */
    rows?: number
    /**
     * 展开提示文字，默认为“展开”
     */
    expandText?: string
    /**
     * 收起提示文字，默认为“收起”
     */
    collapseText?: string
}

const ParagraphsExpand: React.FC<ParagraphExpandType> = (props) => {

    const { content, separator, rows, expandText, collapseText } = props

    const [paragraphRows, setParagraphRows] = useState<number | undefined>(undefined)
    const [expand, setExpand] = useState(false)
    const [contentWidth, setContentWidth] = useState(0)
    const contentRef = useRef<HTMLDivElement | null>(null)

    const useWidhtContentWidth = (bodyWidth: number) => {
        if (bodyWidth >= 768) {
            setContentWidth(bodyWidth - 362)
            return
        }
        const W = bodyWidth - 154
        setContentWidth(W > 0 ? W : 0)
    }

    const resizeUpdate = useCallback((e: any) => {
        const div = contentRef.current
        if (!div) {
            const bodyWidth = e.target.innerWight
            useWidhtContentWidth(bodyWidth)
            return
        }
        setContentWidth(div.offsetWidth)
    }, [contentRef])

    useEffect(() => {
        const div = contentRef.current
        if (!div) {
            useWidhtContentWidth(document.body.offsetWidth)
            return
        }
        setContentWidth(div.offsetWidth)

        window.addEventListener('resize', resizeUpdate)
        return () => {
            window.removeEventListener('resize', resizeUpdate)
        }
    }, [contentRef])

    const contents = useMemo(() => {
        return Array.isArray(content) ? content : content.split(separator || '<br/>').filter((value: string) => value.trim())
    }, [content])

    const paragraphs = useMemo(() => {
        if (expand) {
            return contents
        }
        let paragraphs = [] as string[]
        let maxLine = rows || 2
        for (let i = 0; i < contents.length; i++) {
            const item = contents[i]
            paragraphs.push(item)
            const line = paragraphLine(item, contentWidth, 22)
            // FIXME: - 由于“展开”按钮使用flex-shrink: 0，会造成在换行边界时，多行文本可能有细微偏差。
            if (line >= maxLine) {
                setParagraphRows(line === maxLine && i === contents.length - 1 ? undefined : maxLine)
                return paragraphs
            }
            maxLine -= line
        }
        setParagraphRows(undefined)
        return paragraphs
    }, [contents, separator, rows, expand, contentWidth])

    const onExpand = (e: any) => {
        e.preventDefault()
        setExpand(true)
    }

    const onCollapse = (e: any) => {
        e.preventDefault()
        setExpand(false)
    }

    return <div className={styles.content} ref={ contentRef }>
        {
            paragraphs.map((paragraph, index) => {
                if (index !== paragraphs.length - 1) {
                    return <div className={styles.text} key={index}>{ paragraph || '--' }</div>
                }
                if (paragraphs.length === contents.length) {
                    return <div className={styles['expand-content']} key={index}>
                        {
                            expand && <>
                                <div className={styles.text}>{ paragraph || '--' }</div>
                                <div className={styles.collapse} onClick={onCollapse}>{ collapseText || '收起' }</div>
                            </>
                        }
                        {
                            !expand && <>
                                <div className={styles['expand-text']} style={{ lineClamp: paragraphRows, WebkitLineClamp: paragraphRows }}>{ paragraph || '--' }</div>
                                {
                                    paragraphRows && <div className={styles.expand} onClick={onExpand}>{ expandText || '展开' }</div>
                                }
                            </>
                        }
                    </div>
                }
                return <div className={styles['expand-content']} key={index}>
                    <div className={styles['expand-text']} style={{ lineClamp: paragraphRows, WebkitLineClamp: paragraphRows }}>{ paragraph || '--' }</div>
                    {
                        paragraphRows && <div className={styles.expand} onClick={onExpand}>{ expandText || '展开' }</div>
                    }
                </div>
            })
        }
    </div>
}

export default memo(ParagraphsExpand)