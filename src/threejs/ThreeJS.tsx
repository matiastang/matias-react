import React from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import ThreeBase from './components/ThreeBase';
import Three1 from './components/Three1';
import Three2 from './components/Three2';

function Home() {

    return (
        <ThreeBase>
            <Three2 />
            {/* <Three1 /> */}
        </ThreeBase>
    );
}

export default hot(Home);