import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import SVGBase from './components/SVGBase';

function Home() {

    useEffect(() => {
        console.log('SVG HOME');
    });

    return (
        <>
            <SVGBase />
        </>
    );
}

export default hot(Home);