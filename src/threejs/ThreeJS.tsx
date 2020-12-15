import React from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import Three1 from './components/Three1';

function Home() {

    return (
        <>
            <Three1 />
        </>
    );
}

export default hot(Home);