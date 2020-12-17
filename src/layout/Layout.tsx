import React, { FC, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

const Loyout: FC = (props) => {

    useEffect(() => {
        console.log('Loyout');
    });
    
    return (
        <div>
            {
                props.children
            }
        </div>
    );
};

export default hot(Loyout);