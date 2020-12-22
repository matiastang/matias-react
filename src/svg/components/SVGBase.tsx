import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import HelloSVG from '../resource/hello.svg';// 引用为React组件
// import helloURL, { ReactComponent as HelloSVG } from '../resource/hello.svg';
// const helloURL = require('../resource/hello.svg');// 引入路径使用

function SVGBase() {

    useEffect(() => {
        // console.log(helloURL);
    });

    return (
        <>
            {/* <svg width="500px" height="500px">
                <rect x="0" y="0" width="100" height="100" fill="#feac5e">
                    <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
                </rect>
            </svg> */}
            {/* <embed src={ helloURL } type="image/svg+html"></embed>
            <object data={ helloURL } type="image/svg+html"></object>
            <iframe src={ helloURL } ></iframe> */}
            <HelloSVG />
        </>
    );
}

export default hot(SVGBase);