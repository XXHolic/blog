# n.Error Tracking Product.n
## <a name="start"></a> 引子
要做异常监控方面的尝试，先对已有的一些产品进行体验对比。

## <a name="title1"></a> Rollbar
产品概括：敏捷开发和持续交付的错误监控和崩溃报告。
产品功能概括：实时监控、异常分类分析、异常信息重现调试、数据安全控制及认证

其它信息：
- 有免费版本，有限制的免费
- 多开发语言版本，多平台
- 非开源

### 实际使用体验
初次使用引导，可以了解整体使用方法。

<details>
<summary>图示</summary>

![n-rollbar-step1][url-local-8]
![n-rollbar-step2][url-local-9]
![n-rollbar-step3][url-local-10]

</details>


左侧菜单主要有 Dashboard、Items、Versions、Deploys、RQL、People、Setting，下面进行进一步说明。


#### Dashboard
数据整体可视化看板，提供所有的错误类型、环境、框架和筛选。

<details>
<summary>图示</summary>

![n-rollbar-dashboard][url-local-1]

</details>

#### Items
异常信息列表，提供项目、环境、框架、时间、错误类型、状态、所属人筛选。

<details>
<summary>图示</summary>

![n-rollbar-items][url-local-2]

</details>

#### Versions
异常与代码版本的关联统计，可与提交信息相关联。

<details>
<summary>图示</summary>

![n-rollbar-versions][url-local-3]

</details>

#### Deploys
发布历史与异常的关联统计。

<details>
<summary>图示</summary>

![n-rollbar-deploys][url-local-4]

</details>

#### RQL
自定义语句进行搜索。

<details>
<summary>图示</summary>

![n-rollbar-rql][url-local-5]

</details>

#### People
异常与实际用户关联

<details>
<summary>图示</summary>

![n-rollbar-people][url-local-6]

</details>

#### Setting
用户权限和系统相关设置，通知设置、关联平台、token生成、团队成员、发布环境、自定义指纹等等。

<details>
<summary>图示</summary>

![n-rollbar-setting][url-local-7]

</details>


### 分析
- 异常统计是很基本的功能，但维度的划分是一个需要根据实际业务进行判断。rollbar 从版本，发布历史，用户三个大的维度进行区分，值得参考。
- 自定义查询对于高级的用户来说，会是一个比较灵活的工具。
- 异常处理时，团队合作也是要考虑的。

## <a name="title1"></a> SENTRY
产品概括：Working Code, Happy Customers，这个口号感觉偏向开发者。
产品功能概括：异常信息、事件监听、数据筛选及可视化

其它信息：
- 有免费版本，有限制的免费
- 多开发语言版本，多平台
- 开源

### 实际使用体验
初次使用时，也有会引导，但以任务的形式，如果没有完成，会持续的进行记录。

<details>
<summary>图示</summary>

![n-sentry-guide][url-local-20]

</details>

左侧菜单主要有 Projects、Issues、Discover、Performance、Alerts、Releases、Activity、Stats、Settings。下面进行进一步说明。

#### Projects
用来管理所有项目的地方。
<details>
<summary>图示</summary>

![n-sentry-projects][url-local-11]

</details>

#### Issues
异常信息列表，提供用户、环境、时间、异常状态等筛选。

<details>
<summary>图示</summary>

![n-sentry-issues][url-local-12]

</details>

#### Discover
所有事件的汇聚，在此页面可用于主动检查应用的状况。

<details>
<summary>图示</summary>

![n-sentry-discover][url-local-13]

</details>

#### Performance
加载时间等跟性能有关的指标统计。

<details>
<summary>图示</summary>

![n-sentry-performance][url-local-14]

</details>

#### Alerts
自定义提醒。

<details>
<summary>图示</summary>

![n-sentry-alerts][url-local-15]

</details>

#### Releases
追踪发布与异常之间的关联。

<details>
<summary>图示</summary>

![n-sentry-releases][url-local-16]

</details>

#### Activity
系统一些操作记录。

<details>
<summary>图示</summary>

![n-sentry-activity][url-local-17]

</details>

#### Stats
所有项目以一定的维度进行的整合。

<details>
<summary>图示</summary>

![n-sentry-stats][url-local-18]

</details>


#### Settings
系统基本设置，成员、权限、团队等设置。

<details>
<summary>图示</summary>

![n-sentry-settings][url-local-19]

</details>

### 分析
- sentry 偏重功能性上的划分，除了异常，还对性能上进行拓展，这个可以划分到中后期的功能。
- sentry 对于项目单独的功能模块，相对比 rollbar 更加直观一些。
- 自身系统的日志，对于团队合作来说，也是一个比较重要的参考。

## <a name="title1"></a> LogRocket
产品概括：重现用户操作和 bug，帮助更快修复 bug 。
产品功能概括：实时监控、异常分类分析、异常信息重现调试、数据安全控制及认证

其它信息：
- 有免费版本，有限制的免费
- 多开发语言版本，多平台
- 非开源


<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [Error Tracking - Top Suggestions and Tools][url-article-1]

[url-article-1]:https://www.keycdn.com/blog/error-tracking

[url-local-1]:./images/error-tracking-product/rollbar-dashboard.png
[url-local-2]:./images/error-tracking-product/rollbar-items.png
[url-local-3]:./images/error-tracking-product/rollbar-versions.png
[url-local-4]:./images/error-tracking-product/rollbar-deploys.png
[url-local-5]:./images/error-tracking-product/rollbar-rql.png
[url-local-6]:./images/error-tracking-product/rollbar-people.png
[url-local-7]:./images/error-tracking-product/rollbar-settings.png
[url-local-8]:./images/error-tracking-product/rollbar-step-1.png
[url-local-9]:./images/error-tracking-product/rollbar-step-2.png
[url-local-10]:./images/error-tracking-product/rollbar-step-3.png

[url-local-11]:./images/error-tracking-product/sentry-projects.png
[url-local-12]:./images/error-tracking-product/sentry-issues.png
[url-local-13]:./images/error-tracking-product/sentry-discover.png
[url-local-14]:./images/error-tracking-product/sentry-performance.png
[url-local-15]:./images/error-tracking-product/sentry-alerts.png
[url-local-16]:./images/error-tracking-product/sentry-releases.png
[url-local-17]:./images/error-tracking-product/sentry-activity.png
[url-local-18]:./images/error-tracking-product/sentry-stats.png
[url-local-19]:./images/error-tracking-product/sentry-settings.png
[url-local-20]:./images/error-tracking-product/sentry-guide.png

<details>
<summary>:wastebasket:</summary>


最近在看[][url-book]，里面关于性的设定很有意思，在书中描述的星球上，是没有性别区分的。下面是书中部分摘录。



![49-poster][url-local-poster]

</details>

[url-book]:https://book.douban.com/subject/26916012/
[url-local-poster]:./images/49/poster.jpg
