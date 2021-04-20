import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import SVGBase from './components/SVGBase';
import SVGDOM from './components/svgdom/SVGDOM';

function Home() {

    useEffect(() => {
        console.log('SVG HOME');
    });

    return (
        <>
            <SVGBase />
            <SVGDOM />
        </>
    );
}

export default hot(Home);