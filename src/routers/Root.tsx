import React, { FC, useEffect } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import SVGHome from '../svg/SVG';
import Three from '../threejs/ThreeJS';
// import Error from '../components/Error';

const Root: FC = () => {

    useEffect(() => {
        console.log('Root');
    });
    
    return (
        <HashRouter>
            <Route path="/" exact  component={ SVGHome } />
            <Route path="/svg" exact  component={ SVGHome } />
            <Route path="/three" exact  component={ Three } />
            {/* <Route path="*" component={ Error } /> */}
        </HashRouter>
    );
};

export default hot(Root);