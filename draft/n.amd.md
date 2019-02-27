# 正则表达式
## <a name="index"></a> 目录
- [场景](#situation)
- [问题1](#style)
  - [问题12](#link)
- [参考资料](#reference)


## <a name="situation"></a> 场景

## commonjs
实践者：node.js webpack npm
```javascript
var module = {
  exports: {}
};

(function(module, exports) {
  exports.multiply = function (n) { return n * 1000 };
}(module, module.exports))

var f = module.exports.multiply;
f(5)
```
CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的
## AMD
异步模块定义规范,requirejs 是这个规范的实践者
```javascript
// 模块，这里使用AMD定义模块的方式，例如，定义一个模块module1
define('module1', ['zepto'], function($) {
    console.log('this is module1')
})
```

## CMD
通用模块，sea.js 是这个规范的实践者

```javascript
define(function(require, exports) {

  // 获取模块 a 的接口
  var a = require('./a');

  // 调用模块 a 的方法
  a.doSomething();

});
```

## 比较
- AMD是需要通过异步加载的形式把依赖加载进来，然而CMD在require依赖的时候，可以通过同步的形式（require），也可以通过异步的形式（require.async）
- CMD 推崇依赖就近，AMD 推崇依赖前置。在AMD中，我们需要把依赖前置在依赖数组中。而在cmd中，我们只需要在使用这个模块前，把依赖的模块require进来。

## <a name="reference"></a> 参考资料
https://www.cnblogs.com/chenguangliang/p/5856701.html

[url-base]:https://xxholic.github.io/blog/draft