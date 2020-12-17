import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';

interface Props {
    message: string
}

const Error: FC<Props> = (props) => {
    return (
        <label>{ props.message }</label>
    );
};

Error.defaultProps = {
    message: '网页访问错误'
};

export default hot(Error);