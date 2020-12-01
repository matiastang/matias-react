/*
 * @Author: tangdaoyong
 * @Date: 2020-11-30 16:02:56
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-11-30 16:40:19
 * @Description: file content
 */
// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }
  
// exports.default = defaultTask;

const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('delete');

exports.clear_output = function(cb) {
    del(['output/*.js'], cb);
};

exports.default = function() {
    return src('src/*.js')
            .pipe(babel())
            .pipe(src('vendor/*.js'))
            .pipe(dest('output/'))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(dest('output/'));
};