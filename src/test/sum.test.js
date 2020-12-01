/*
 * @Author: tangdaoyong
 * @Date: 2020-12-01 11:46:58
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-01 11:48:36
 * @Description: file content
 */
const sum = require('../utils/sum');

test('1+2=3', () => {
    expect(sum(1, 2)).toBe(3);
});