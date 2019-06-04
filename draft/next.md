# next
## jiangshan suggest
- 写个自用脚手架 demo，搭载 eslint 和 husky 的功能。
- 熟悉 nodejs 常用工具库，熟悉其 api 和生态。
- 接下来就是如何生成一个具体环境（react vue 等等）的项目。
- 懂一点 xshell 脚本。

## liangzhu suggest
### 第一阶段
基于 webpack 文档引导
1. 让一个简单的 react 程序运行起来，根据错误的提示逐渐修正。(done)
2. import 等加载（异步和同步）文件的处理。
2. 添加对 css（sass less postcss） 样式的支持。
3. 对图片、svg 、装饰器的支持。
4. json 读取处理。
5. dll chunk，文件加载方式（按需加载、提前加载）的处理。
6. server proxy。

### 第二阶段
基于 create-react-app 的配置进行按需修改
- eslint prettier，可以进行不同粒度（例如不同文件夹）进行配置。
- style lint。
- test 参照 vue-cli3 中的引导。

#### 部署
- 服务器
- shell脚本，工具 sync
- node部署, 用pm2，nginx
- 编译发npm包，建议用官方的库，第三方的库问题很多

### 第三阶段
项目管理的方式，使用不同的解决方案会导致不同的结构目录。先理解其思想
- 研读 https://overreacted.io/ 文章。
- 组件复用的处理方式。
- 项目规范
- 思考如何让一个项目便于开发和重构
- 如何写的更加优雅的状态管理

### 服务端相关
- nginx
- docker 的简单使用，安装，映射文件，停止，重启。例如使用 docker 安装 mysql nginx 等。




# 关于架构师交流
- 深度：专业技能的深度，特定知识的深度，解决问题。
- 广度：各种框架的优劣，取舍。
- 影响力，对一些事情能够推行下去，例如规范、标准、代码 review。