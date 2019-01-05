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

## <a name="why"></a> npm-publish
作用是发布包。
### 摘要
```
npm publish
```
如果没有传递额外参数，则 Publishes '.'。
### 描述
发布一个包到登记处，这样就能用包的名称来进行安装。如果本地没有 **.gitignore** 或者 **.npmignore** 文件，在包目录中的所有文件将会包含在发布的包中。如果这两个文件都存在，并且一个文件在 **.gitignore** 中被忽略，但是在 **.npmignore** 不被忽略，那么这个文件还是会包含在发布的包中。查看 [npm-developers][url-npm-developers] 详细了解在发布的包中包含的内容，以及包是如何构建。

npm 默认是发布到公开的登记处。当指定一个跟默认不同的特定登记处，或者在名称（见 [package.json][url-package-json]）中使用一个 [npm-scope][url-npm-scope]，npm 默认的发布行为就会被覆盖。

如果包的名称和版本的组合在指定的登记处已经存在，那么发布会失败。

一旦一个包的名称和版本发布了，这个特定的版本和名称的组合就不能再使用，即使它用 [npm-unpublish][url-npm-unpublish] 指令移除了。

## <a name="why"></a> npm-developers
开发者引导。
### 描述
如果决定使用 npm 开发（可能是发布或者部署）你的项目，

<div align="right"><a href="#index">Top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [Signed zero](https://en.wikipedia.org/wiki/Signed_zero)


[url-npm-developers]:https://docs.npmjs.com/misc/developers
[url-package-json]:https://docs.npmjs.com/files/package.json
[url-npm-scope]:https://docs.npmjs.com/misc/scope
[url-npm-unpublish]:https://docs.npmjs.com/cli/unpublish

