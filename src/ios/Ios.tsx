import React from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import Home from './components/home';

function Index() {

    return (
        <div>
            <Home />
        </div>
    );
}

export default hot(Index);