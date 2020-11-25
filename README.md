# matias-react

react webpack js ts

React 学习相关

npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev react react-dom
npm i --save-dev babel-cli babel-core babel-preset-env babel-preset-react
npm i --save-dev @babel/core
[babel6和babel7](https://blog.csdn.net/weixin_37674736/article/details/104203271)
[Webpack配置React支持Typescript的三种方式](https://blog.csdn.net/HatOfDragon/article/details/104043348/)
[typescript search](https://www.typescriptlang.org/dt/search?search=react)
[TypeScript基础入门之JSX(一)](https://www.jianshu.com/p/bbd145032fef)
## 错误处理
### configuration.resolve.extensions[0] should not be empty

`webpack` 升级后，`webpack.config.js`中的`extensions` 数组中不能使用空字符串，需要使用 `*` 代替。

```js
resolve: {
    extensions: ['*', '.js', '.jsx']
}
```

### Cannot find module 'webpack-cli/bin/config-yargs'

[错误参考](https://github.com/webpack/webpack-cli/issues/1948)

1. 卸载高版本的`webpack-cli`。
```
$ npm uninstall webpack-cli
```
2. 安装制定版本的`webpack-cli`。
```
$ npm i --save-dev webpack-cli@3
```