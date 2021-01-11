import React, { useState, useCallback, useEffect } from 'react';
import { message } from 'antd';
// import styles from './home.scss';
interface IOSFunc {
    (arg: string): void
}
declare var window: Window & typeof globalThis & {
    webkit: any,
    iOSCallFunction: IOSFunc
};
function Home() {

    const colorEnum = {
        red: 'red',
        blue: 'blue'
    };
    
    const [color, setColor] = useState(colorEnum.red);

    const divClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e);
        alert(`点击了${ e.target }`);
        // message.success(`点击了${ e.target }`);
        if (color !== colorEnum.red) {
            setColor(colorEnum.red);
        } else {
            setColor(colorEnum.blue);
        }
        let parameters = {
            'status': 'success'
        };
        // window.webkit.messageHandlers.jsConsole.postMessage(parameters);
        /*
        单文件：

        declare var window: Window & { webkit: any };

        全局使用：

        declare global {
        interface Window {
            isWeixin: boolean
        }
        }
        */
        let promise = window.webkit.messageHandlers.jsConsole.postMessage(parameters);
        promise.then((result: any) => {
            alert(result);
        }).catch((err: any) => {
            alert(err);
        });
    }, [color]);

    useEffect(() => {
        window.iOSCallFunction = (arg: string) => {
            // var element = document.getElementById(elementIDToStylize);
            // if (!element) {
            //     return false;
            // }
            // for (const theStyle in stylesToApply) {
            //     element.style.theStyle = stylesToApply[theStyle];
            // }
            // return true;
            alert(`iOS调用js方法成功${arg}`);
        };
    });

    return (
        <div>
            <div className="header" style={{ 'color': 'red' }}>header</div>
            <a href="https://www.baidu.com">https://www.baidu.com</a>
            <div id="three" style={{ width: 100, height: 1000, background: color, margin: 10 }} onClick={(e) => { divClick(e); }}>iOS Home</div>
            <div className="footer" style={{ 'color': 'red' }}>header</div>
        </div>
    );
}

export default Home;