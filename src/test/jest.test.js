/*
 * @Author: tangdaoyong
 * @Date: 2020-12-01 10:53:56
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-01 14:39:15
 * @Description: file content
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import JestHello from '../components/jest';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('有无名称', () => {

    act(() => {
        render(<JestHello />, container);
    });
    expect(container.textContent).toBe('hello welcome jest');

    let name = 'matias';
    act(() => {
        render(<JestHello name={ name }/>, container);
    });
    expect(container.textContent).toBe(`hello ${name}`);

    // name = '';
    // act(() => {
    //     render(<JestHello name={ name }/>, container);
    // });
    // expect(container.textContent).toBe(`hello ${name}`);

    // name = null;
    // act(() => {
    //     render(<JestHello name={ name }/>, container);
    // });
    // expect(container.textContent).toBe(`hello ${name}`);

    // act(() => {
    //     render(<JestHello name={ nameUndefined }/>, container);
    // });
    // expect(container.textContent).toBe(`hello ${nameUndefined}`);

    name = ' ';
    act(() => {
        render(<JestHello name={ name }/>, container);
    });
    expect(container.textContent).toBe(`hello ${name}`);
});
