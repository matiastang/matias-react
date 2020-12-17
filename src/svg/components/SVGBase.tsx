import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import HelloSVG from '../resource/hello.svg';// 引用为React组件
// import helloURL, { ReactComponent as HelloSVG } from '../resource/hello.svg';
// const helloURL = require('../resource/hello.svg');// 引入路径使用

function SVGBase() {

    return (
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle cx="100" cy="50" r="40" stroke="black"
                    stroke-width="2" fill="red" />
            </svg>
            <embed src={ helloURL } type="image/svg+html"></embed>
            <object data={ helloURL } type="image/svg+html"></object>
            <iframe src={ helloURL } ></iframe> */}
            <HelloSVG />
        </>
    );
}

export default hot(SVGBase);