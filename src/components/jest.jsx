import React from 'react';

export default function jestHello(props) {
    let name = props.name;
    if (name) {
        return <h1>hello {name}</h1>;
    } 
    return <h1>hello welcome jest</h1>;
}