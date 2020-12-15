import React from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import EChartsBar from './components/EChartsBar';
import EChartsChina from './components/EChartsChina';

function Home() {

    return (
        <>
            <EChartsChina />
            {/* <EChartsBar /> */}
        </>
    );
}

export default hot(Home);