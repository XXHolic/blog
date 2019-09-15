# 42.Read dva
## <a name="index"></a> 目录
- [引子](#start)
- [查看方式](#see)
- [实现](#code)
- [参考资料](#reference)


## <a name="start"></a> 引子
再一次碰到了 dva ，之前只是会用，现在感觉要花时间详细看看。

Dva 版本 2.6.0-beta.14。

## <a name="see"></a> 简介
dva 首先是一个基于 redux 和 redux-saga 的数据流方案。详细见[Dva Docs][url-docs-dva]。

<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="code"></a> 实现
以文档中提供的 [Count][url-example-count] 为例，看下做了些什么。
<details>
<summary>示例主要代码</summary>

```js
import React from 'react';
import dva, { connect } from 'dva';

// 1. Initialize
const app = dva();

// 2. Model
app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add  (count) { return count + 1 },
    minus(count) { return count - 1 },
  },
});

// 3. View
const App = connect(({ count }) => ({
  count
}))(function(props) {
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
    </div>
  );
});

// 4. Router
app.router(() => <App />);

// 5. Start
app.start('#root');
```
</details>

第一步初始化 执行 dva() ，进入的时源码中的 dva/src/index 中下面的方法
```js
export default function(opts = {}) {
  const history = opts.history || createHashHistory();
  const createOpts = {
    initialReducer: {
      router: connectRouter(history),
    },
    setupMiddlewares(middlewares) {
      return [routerMiddleware(history), ...middlewares];
    },
    setupApp(app) {
      app._history = patchHistory(history);
      // app._history = patchHistory(history);
    },
  };

  const app = create(opts, createOpts);
  const oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

    function router(router) {
    invariant(
      isFunction(router),
      `[app.router] router should be function, but got ${typeof router}`,
    );
    app._router = router;
  }

  function start(container) {
    // 允许 container 是字符串，然后用 querySelector 找元素
    if (isString(container)) {
      container = document.querySelector(container);
      invariant(container, `[app.start] container ${container} not found`);
    }

    // 并且是 HTMLElement
    invariant(
      !container || isHTMLElement(container),
      `[app.start] container should be HTMLElement`,
    );

    // 路由必须提前注册
    invariant(app._router, `[app.start] router must be registered before app.start()`);

    if (!app._store) {
      oldAppStart.call(app);
    }
    const store = app._store;

    // export _getProvider for HMR
    // ref: https://github.com/dvajs/dva/issues/469
    app._getProvider = getProvider.bind(null, store, app);

    // If has container, render; else, return react component
    if (container) {
      render(container, store, app, app._router);
      app._plugin.apply('onHmr')(render.bind(null, container, store, app));
    } else {
      return getProvider(store, this, this._router);
    }
  }
}
```






<div align="right"><a href="#index">Back to top :arrow_up:</a></div>




<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [DvaJS][url-docs-dva]

[url-base]:https://xxholic.github.io/blog/draft

[url-docs-dva]:https://dvajs.com/

[url-example-count]:https://stackblitz.com/edit/dva-example-count


[url-local-mode-none]:./images/41/mode-none.png
[url-local-mode-dev]:./images/41/mode-dev.png
[url-local-mode-pro]:./images/41/mode-pro.png

