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
CommonJS是主要为了JS在后端的表现制定的，它是不适合前端的
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

* **定位有差异**。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。Sea.js 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 环境中。

* **遵循的规范不同**。RequireJS 遵循 AMD（异步模块定义）规范，Sea.js 遵循 CMD （通用模块定义）规范。规范的不同，导致了两者 API 不同。Sea.js 更贴近 CommonJS Modules/1.1 和 Node Modules 规范。

* **推广理念有差异**。RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。Sea.js 不强推，采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。

* **对开发调试的支持有差异**。Sea.js 非常关注代码的开发调试，有 nocache、debug 等用于调试的插件。RequireJS 无这方面的明显支持。

* **插件机制不同**。RequireJS 采取的是在源码中预留接口的形式，插件类型比较单一。Sea.js 采取的是通用事件机制，插件类型更丰富。

## <a name="reference"></a> 参考资料
https://www.cnblogs.com/chenguangliang/p/5856701.html


[与 RequireJS 的异同](https://github.com/seajs/seajs/issues/277)

[url-base]:https://xxholic.github.io/blog/draft