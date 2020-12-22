import React, { useState, useEffect, useCallback } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot
import SVG from '../../resource/svgdom.svg';// 引用为React组件
// import styles from './svgdom.scss';
import { isEmpty } from 'lodash';

function SVGDOM() {

    const [circleR, setCircleR] = useState(0);

    const domClick = useCallback((e) => {
        if (circleR < 40) {
            e.target.setAttribute('r', 40);
            setCircleR(40);
        } else {
            e.target.setAttribute('r', 30);
            setCircleR(30);
        }
    }, [circleR]);

    useEffect(() => {
        // mycircle -> svgdom_svg__mycircle
        let mycircle = document.getElementById('svgdom_svg__mycircle');
        if (isEmpty(mycircle)) {
            return;
        }
        mycircle?.addEventListener('click', domClick);
    });

    return (
        <>
            <SVG />
        </>
    );
}

export default hot(SVGDOM);