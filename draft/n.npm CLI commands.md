# n.npm CLI commands
## <a name="index"></a> 目录
- [场景](#situation)
- [为什么需要 -0](#why)
- [+0 和 -0 的存储](#store)
- [区分方法](#function)
  - [思路1](#way1)
  - [思路2](#way2)
  - [思路3](#way3)
  - [思路4](#way4)
- [参考资料](#reference)

## <a name="situation"></a> 场景
最近在熟悉 npm 相关指令，在看文档的时候，结合实际操作，进行相关的记录，并不是所有内容的翻译，方便以后查阅。

## <a name="why"></a> npm-developers
开发者引导。
### 描述
如果决定使用 npm 开发（可能是发布或者部署）你的项目，

## <a name="why"></a> npm-publish
作用是发布包。
### 摘要
```
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]
```
如果没有传递额外参数，则 Publishes '.'。
### 描述
发布一个包到登记处，这样就能用包的名称来进行安装。如果本地没有 **.gitignore** 或者 **.npmignore** 文件，在包目录中的所有文件将会包含在发布的包中。如果这两个文件都存在，并且一个文件在 **.gitignore** 中被忽略，但是在 **.npmignore** 不被忽略，那么这个文件还是会包含在发布的包中。查看 [npm-developers][url-npm-developers] 详细了解在发布的包中包含的内容，以及包是如何构建。

npm 默认是发布到公开的登记处。当指定一个跟默认不同的特定登记处，或者在名称（见 [package.json][url-package-json]）中使用一个 [npm-scope][url-npm-scope]，npm 默认的发布行为就会被覆盖。

如果包的名称和版本的组合在指定的登记处已经存在，那么发布会失败。

一旦一个包的名称和版本发布了，这个特定的版本和名称的组合就不能再使用，即使它用 [npm-unpublish][url-npm-unpublish] 指令移除了。

### 注意事项
使用 tag 参数，并不是发布到正式环境中。

## npm-deprecate
### 摘要
```
npm deprecate <pkg>[@<version>] <message>
```
### 描述
这个命令将会更新更新包的 npm 注册表项，当有人试图安装的时候，给出警告。例如
```
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```
需要注意的是 message 必须要用双引号。

## npm-version
### 摘要
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
```
### 描述
在包的目录下运行这个命令，提提升包的版本，并且会把数据写到 **package.json，package-lock.json**，如果有 **npm-shrinkwrap.json**，也会写到里面。

## npm-dist-tag
### 摘要
```
npm dist-tag add <pkg>@<version> [<tag>]
npm dist-tag rm <pkg> <tag>
npm dist-tag ls [<pkg>]
```
### 描述
在一个包中添加（add），移除（rm），枚举（ls）标签。
- 添加：用特定的标签标记包特定的版本，如果没有指定，则使用 **--tag** 配置。
- 移除：清除保重不再使用的标签。
- 枚举：显示包所有标签。

当安装包的时候，可以用标签当作版本号的引用。
```
npm install <name>@<tag>
```
发布包时，如果没有设置 **--tag** 参数，默认给发布的版本设置了 **latest** 的标签。

默认，**npm install** （没有指定 @<version> 或者 @<tag>）安装的是 **latest** 标签的版本。

### 作用
标签可以提供别名取代版本号。

默认的，除了 **latest** 标签，其它标签对于 npm 自身没有任何特定意义。

### 注意事项
可以解析为有效 semver 范围的标记将被拒绝。例如 v1.4 不能当作一个标签，因为它被解析为 semver 的范围 >=1.4.0 <1.5.0。

避免这种问题最简单的方法，就是命名标签的时候，不要用数字或者字符开头。

add 和 rm 的指令执行后，会同步到 npm 库上。

## npm-link


##  npm audit fix

<div align="right"><a href="#index">Top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [Signed zero](https://en.wikipedia.org/wiki/Signed_zero)


[url-npm-developers]:https://docs.npmjs.com/misc/developers
[url-package-json]:https://docs.npmjs.com/files/package.json
[url-npm-scope]:https://docs.npmjs.com/misc/scope
[url-npm-unpublish]:https://docs.npmjs.com/cli/unpublish

