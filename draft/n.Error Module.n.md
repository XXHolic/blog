# n.Error Module.n
## <a name="index"></a> 目录
- [引子](#start)
- [title1](#title1)
  - [title11](#title11)
- [参考资料](#reference)


## <a name="start"></a> 引子
看了一异常捕获的封装，发现所要做的事情远比想象中的要多，整理一下关键的思路作为参考。

## <a name="mitojs"></a> mitojs
可以分为两大块：上报和本地打印。

### 上报
- 监控分类
- 异常分类模块
- 原生请求方法（xhr,fetch）的再次封装
- 错误事件的处理
- 如何发出请求的处理，例如立即上报还是放到一个列队里面逐个上报，这里采用的放到队列里面。
- 自定义上报。
- 每一个异常的标志关联。
- 上报信息的分类



#### 用户行为
用户操作的顺序，需要考虑 hash 和 异常的关联性。


<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [mitojs][url-github-1]
- https://blog.fundebug.com/2017/04/05/understand-script-error/
- https://blog.fundebug.com/2017/04/06/test-script-error/
- https://blog.fundebug.com/2017/04/07/solve-script-error/
- https://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox
- https://blog.sentry.io/2016/05/17/what-is-script-error.html

[url-github-1]:https://github.com/clouDr-f2e/mitojs

[url-local-rail]:./images/n/rail.png

<details>
<summary>:wastebasket:</summary>

![n-poster][url-local-poster]

</details>

[url-book]:https://book.douban.com/subject/26916012/
[url-local-poster]:./images/n/poster.jpg
