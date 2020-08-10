# Error Tracking Product
## <a name="index"></a> 目录
- [引子](#start)
- [Rollbar](#rollbar)
- [SENTRY](#sentry)
- [LogRocket](#logrocket)
- [综合分析](#analysis)
- [参考资料](#reference)


## <a name="start"></a> 引子
要做异常监控方面的尝试，先对已有的一些产品进行体验对比。

## <a name="rollbar"></a> Rollbar
产品概括：面向敏捷开发和持续交付的错误监控和崩溃报告。

产品功能概括：实时监控、异常分类分析、异常信息重现调试、数据安全控制及认证。

其它信息：
- 有免费版本，有限制的免费。
- 多开发语言版本，多平台。
- 非开源。

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
数据整体可视化看板，提供错误类型、环境、框架等筛选。

<details>
<summary>图示</summary>

![n-rollbar-dashboard][url-local-1]

</details>

#### Items
异常信息列表，提供项目、环境、框架、时间、状态、所属人等筛选。

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
异常与实际用户关联。

<details>
<summary>图示</summary>

![n-rollbar-people][url-local-6]

</details>

#### Setting
用户权限和系统相关设置，通知、关联平台、token生成、团队成员、发布环境、自定义指纹等设置。

<details>
<summary>图示</summary>

![n-rollbar-setting][url-local-7]

</details>


### 分析
- 异常统计是很基本的功能，但维度的划分是一个需要根据实际业务进行判断。rollbar 从版本，发布历史，用户三个大的维度进行区分，值得参考。
- 自定义查询对于高级的用户来说，会是一个比较灵活的工具。
- 异常处理时，团队合作也是要考虑的。


<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="sentry"></a> SENTRY
产品概括：Working Code, Happy Customers，这个口号感觉偏向开发者。

产品功能概括：异常信息、事件监听、数据筛选及可视化

其它信息：
- 有免费版本，有限制的免费。
- 多开发语言版本，多平台。
- 开源。

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



<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="logrocket"></a> LogRocket
产品概括：复现用户操作和 bug，帮助更快修复 bug 。

产品功能概括：主打复现功能。

其它信息：
- 有免费版本，有限制的免费
- 支持的开发语言版本有限。
- 非开源

### 实际使用体验
初次使用时，有引导，是强制性的。

<details>
<summary>图示</summary>

![n-logrocket-guide1][url-local-21]
![n-logrocket-guide2][url-local-22]
![n-logrocket-guide3][url-local-23]

</details>

左侧菜单主要有 Everyone、Signed-up、Mobile、New Users、Inactive User、Settings。下面进行进一步说明。

#### Everyone
针对所有用户统计。

<details>
<summary>图示</summary>

![n-logrocket-everyone][url-local-24]

</details>

#### Signed-up
针对注册用户统计。

<details>
<summary>图示</summary>

![n-logrocket-signed][url-local-25]

</details>

#### Mobile
针对移动端用户统计。

<details>
<summary>图示</summary>

![n-logrocket-mobile][url-local-26]

</details>

#### New Users
针对新的用户统计。

<details>
<summary>图示</summary>

![n-logrocket-new-users][url-local-27]

</details>


#### Inactive User
针对未激活的用户统计。

<details>
<summary>图示</summary>

![n-logrocket-inactive-users][url-local-28]

</details>



#### Settings
系统基本设置，成员、权限、团队等设置。

<details>
<summary>图示</summary>

![n-logrocket-settings][url-local-29]

</details>


### 分析
- LogRocket 感觉适合用于新用户的统计分析，主要维度是用户。
- 可视化的复现以及网络相关信息的回放，是一个很大的亮点。
- 组合式的筛选方式比较新颖。

## <a name="analysis"></a> 综合分析
异常捕获明确的目的性，可以比较方便确定产品系统功能的主要方向。同一个功能，不同的理解方式和理念，会影响最终产品系统的组织方式。
- 在 Rollbar 中产品介绍中，主打面向敏捷开发和持续交付，在该系统中，版本关联、提交关联、用户关联的主要模块体现了这点。
- Sentry 宣传 Working Code, Happy Customers 的口号，让人感觉比较自由，在系统中除了主要的功能点外，还从使用者的角度出发，增加了自定义提醒，操作活动记录等一些模块，没有 Rollbar 那种比较体系的关系性。
- LogRocket 很直接的表达出复现的功能点，在该系统中，主要模块相对比较单一，但复现 bug 的主要功能比较好的体现出来了。

通过上面的体验，个人想法是在打造一个**方便按需使用**的产品。简单的说就是尽量包含异常相关的各种功能服务，可以按照需要进行配置使用。在此基础上，可以衍生出更加高效专业的服务业务，比如行业监控指标指导等等。

初期的计划是完成一个基本可用版本，分为**用户端**和**管理端**。

### 用户端
用户端主要是异常捕获上报，初期先实现基本的功能。

更多的监控指标，例如点击，访问时间等等，可在后续中陆续添加。

待细化。

### 管理端
管理端汇聚所有上报信息，以不同的方式管理展示上报信息，和团队一起处理对应的异常。

包含基本模块：登录、项目、异常、设置。

#### 登录
系统登录认证，登录时基本的权限区分控制。

待细化。

#### 项目
项目模块主要是提供了一种维度的维度的区分，同时可以在后期，根据项目配置相关的版本关联等到。例如针对 PC 端创建一个项目，所有的PC 的异常都会汇聚在这个项目之下，类似的移动端也可以这么做，还可以根据系统自身的项目组合，建立对应的监控项目。

待细化。

#### 异常
所有异常展示的地方，提供多维度的筛选，并每隔一段时间实时的更新最新的数据。

待细化。

#### 设置
项目基本设置、账号基本设置、团队成员设置。

待细化。

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

[url-local-21]:./images/error-tracking-product/logrocket-guide1.png
[url-local-22]:./images/error-tracking-product/logrocket-guide2.png
[url-local-23]:./images/error-tracking-product/logrocket-guide3.png
[url-local-24]:./images/error-tracking-product/logrocket-everyone.png
[url-local-25]:./images/error-tracking-product/logrocket-signed.png
[url-local-26]:./images/error-tracking-product/logrocket-mobile.png
[url-local-27]:./images/error-tracking-product/logrocket-new-users.png
[url-local-28]:./images/error-tracking-product/logrocket-inactive-users.png
[url-local-29]:./images/error-tracking-product/logrocket-settings.png

