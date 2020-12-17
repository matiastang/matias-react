import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';// 引入hot

const ThreeBase: FC = (props) => {

    return (
        <div id="three-id" style={{ margin: 0, overflow: 'hidden'/* 隐藏body窗口区域滚动条 */ }}>
            {
                props.children
            }
        </div>
    );
};

export default hot(ThreeBase);