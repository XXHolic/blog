# touch 事件和 click 事件
## 场景
在探索了Javascript 事件之后，紧接着就对移动端的点击事件进行了解。由于点击延迟 300 毫秒，除了各厂商给出的解决方案，在程序方面也有对应的解决方案，于是选取了几种进行对比查看。在查看源码的过程中，发现了关于事件执行顺序的问题：在touchstart事件中打断点，接下来的额事件就不执行了，不打断点就正常执行。由此开始对事件的执行顺序进行进一步的探索。

## 鼠标事件和 touch 事件
### 常用鼠标事件
- onclick
- ondblclick
- onmousedown
- **onmouseenter**
- **onmouseleave**
- onmousemove
- onmouseover
- onmouseout
- onmouseup

对于这些有几点说明：
1. onmouseenter 事件类似于 onmouseover 事件。 唯一的区别是 onmouseenter 事件不支持冒泡 。
2. onmouseleave 事件类似于 onmouseout 事件。 唯一的区别是 onmouseleave 事件不支持冒泡。
3. 以上的事件属性可用于所有 HTML 元素，除了以下标签
```html
<base>、<bdo>、<br>、<head>、<html>、<iframe>、<meta>、<param>、<script>、<style>、<title>
```

第3条之前一直没有注意过，但个人没有在规范里找到，只是找到了一个 [Note](https://www.w3.org/TR/2017/REC-html52-20171214/dom.html#global-attributes)：虽然这些属性都可以应用到所有的元素，但并不是所有的属性都会有效。于是就亲自验证一下最常见的 onclick 属性。这个测试页面，手机端访问如下

测试结果就是：html、base、bdo 支持 onclick 属性并有效。所以第3条的说法有问题，如果有使用需求，需要注意。

### touch 事件

## 事件触发顺序
以下的测试验证，是针对同一个元素的事件触发顺序。
### PC端
**不点击的情况下**

触发的顺序：

onmouseover -> onmouseenter -> onmousemove -> onmouseout -> onmouseleave。
测试页面在这里，手机端访问如下

**点击的情况下**
单击触发顺序：

**双击的情况下**

### 手机端


## 参考资料
- [MDN Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch)
- [Global-attributes](https://www.w3.org/TR/2017/REC-html52-20171214/dom.html#global-attributes)