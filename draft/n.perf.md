# 正则表达式
## <a name="index"></a> 目录
- [引子](#start)
- [问题1](#style)
  - [问题12](#link)
- [参考资料](#reference)


## <a name="start"></a> 引子

webpack 这种打包方式会把所有的 js 打包到一个文件里面，文件很多的情况下，会影响首页的展示，这样的体验很不好。一般都会进行代码分离和单独提取第三方依赖。接下来看下处理后的实现是否一致。

## 优化后实现
根据 webpack 文档进行了下面的配置修改：
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack"
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  }
};
```
编译后入口文件中逻辑发生了变化，__webpack_require__ 方法实现没有变化：
```js
(function(modules) {
  // webpackBootstrap
  // install a JSONP callback for chunk loading
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    var executeModules = data[2];

    // add "moreModules" to the modules object,
    // then flag all "chunkIds" as loaded and fire callback
    var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
        resolves.push(installedChunks[chunkId][0]);
      }
      installedChunks[chunkId] = 0;
    }
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    if (parentJsonpFunction) parentJsonpFunction(data);

    while (resolves.length) {
      resolves.shift()();
    }

    // add entry modules from loaded chunk to deferred list
    deferredModules.push.apply(deferredModules, executeModules || []);

    // run deferred modules when all chunks ready
    return checkDeferredModules();
  }
  function checkDeferredModules() {
    var result;
    for (var i = 0; i < deferredModules.length; i++) {
      var deferredModule = deferredModules[i];
      var fulfilled = true;
      for (var j = 1; j < deferredModule.length; j++) {
        var depId = deferredModule[j];
        if (installedChunks[depId] !== 0) fulfilled = false;
      }
      if (fulfilled) {
        deferredModules.splice(i--, 1);
        result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
      }
    }

    return result;
  }

  // The module cache
  var installedModules = {};

  // object to store loaded and loading chunks
  // undefined = chunk not loaded, null = chunk preloaded/prefetched
  // Promise = chunk loading, 0 = chunk loaded
  var installedChunks = {
    0: 0
  };

  var deferredModules = [];

  // The require function 省略

  var jsonpArray = (window["webpackJsonp"] = window["webpackJsonp"] || []);
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  var parentJsonpFunction = oldJsonpFunction;

  // run deferred modules from other chunks
  checkDeferredModules();
})([]);
```
多了两个方法：
- webpackJsonpCallback：
- checkDeferredModules


## <a name="reference"></a> 参考资料
[wiki Regular Expression](https://en.wikipedia.org/wiki/Regular_expression)

[url-base]:https://xxholic.github.io/blog/draft