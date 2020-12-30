import React, { FC, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { hot } from 'react-hot-loader/root';

import Layout from '../layout/Layout';
import SVGHome from '../svg/SVG';
import Three from '../threejs/ThreeJS';
import G2Home from '../G2/G2Home';
// import Error from '../components/Error';
import Hello from '../G2/components/hello';
import Point from '../G2/components/geometry/point/Point';
import Line from '../G2/components/geometry/path&line/Line';
import Polygon from '../G2/components/geometry/polygon/Polygon';
import GView from '../G2/components/view/View';
import GLPointColors from '../WebGL/components/glsl/GLPointColor';

import G2Routers from '../G2/G2Home';

let routes = [
    // {
    //     path: '/',
    //     component: SVGHome,
    //     exact: true
    // },
    {
        path: '/svg',
        component: SVGHome,
        exact: true
    },
    {
        path: '/three',
        component: Three,
        exact: true
    },
    {
        path: '/g2',
        children: [
            {
                path: '/g2/hello',
                component: Hello
            },
            {
                path: '/g2/point',
                component: Point
            },
            {
                path: '/g2/line',
                component: Line
            }
        ]
    }
];

// routes.push(G2Routers);

const Root: FC = () => {

    const [rootRoutes, setRootRoutes] = useState(routes);

    useEffect(() => {
        console.log('Root');
        // routes.push(G2Routers);
        console.log(routes);
        console.log(G2Routers);
        // console.log(routes.push(G2Routers));
        // setRootRoutes(routes);
        // console.log(rootRoutes);
    });
    
    return (
        // <HashRouter>
        //     {
        //         renderRoutes(routes)
        //     }
        // </HashRouter>
        <HashRouter>
            <Route path="/" exact  component={ GLPointColors } />
            <Route path="/svg" exact  component={ SVGHome } />
            <Route path="/three" exact  component={ Three } />
            <Route path="/g2/hello" exact  component={ Hello } />
            <Route path="/g2/point" exact  component={ Point } />
            <Route path="/g2/line" exact  component={ Line } />
            <Route path="/g2/polygon" exact  component={ Polygon } />
            <Route path="/g2/view" exact  component={ GView } />
            <Route path="/webgl/glpointcolors" exact  component={ GLPointColors } />
            {/* <Route path="/g2" exact component={ Layout } >
                <G2Home />
            </Route> */}
            {/* <Route path="/webgl">
                <Route path="glpointcolors" component={ GLPointColors } />
            </Route> */}
            {/* <Route path="*" component={ Error } /> */}
        </HashRouter>
    );
};

export default hot(Root);