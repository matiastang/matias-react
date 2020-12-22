import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';// 引入hot
import Hello from './components/hello';
import Point from './components/geometry/point/Point';
import Line from './components/geometry/path&line/Line';
import { RouteConfig } from 'react-router-config';

// function G2Home() {

//     useEffect(() => {
//         console.log('SVG HOME');
//     });

//     return (
//         // <>
//         //     <Route path="hello" exact  component={ Hello } />
//         //     <Route path="point" exact  component={ Point } />
//         //     <Route path="line" exact  component={ Line } />
//         // </>
//         <HashRouter>
//             {/* <Route path="/" exact  component={ Hello } /> */}
//             <Route path="hello" exact  component={ Hello } />
//             <Route path="point" exact  component={ Point } />
//             <Route path="line" exact  component={ Line } />
//         </HashRouter>
//     );
// }

// export default hot(G2Home);

const routes: RouteConfig = {
    path: '/g2',
    // component: <div>g2 error</div>,
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
};

export default routes;