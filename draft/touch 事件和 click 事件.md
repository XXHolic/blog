# touch 事件和 click 事件
## 场景
在探索了Javascript 事件之后，紧接着就对移动端的点击事件进行了解。由于点击延迟 300 毫秒，除了各厂商给出的解决方案，在程序方面也有对应的解决方案，于是选取了几种进行对比查看。在查看源码的过程中，发现了关于事件执行顺序的问题：在touchstart事件中打断点，接下来的额事件就不执行了，不打断点就正常执行。由此开始对事件的执行顺序进行进一步的探索。

## 鼠标事件和 Touch 事件
鼠标事件：
- onclick
可以使用与所有 HTML 元素，除了 ：<base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
- oncontextmenu
所有 HTML 元素
- ondblclick
可使用于使用 HTML 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
- onmousedown
属性适用于所有 HTMl 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
- onmouseenter
不支持冒泡，不可取消
属性可用于使用 HTML 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>
- onmouseleave
不支持冒泡，不可取消
属性可用于使用 HTML 元素，除了:<base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>
- onmousemove
属性可用于使用 HTML 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, and <title>.
- onmouseover
属性可用于所有 HTML 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
- onmouseout
属性可用于使用 HTML 元素，除了: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
- onmouseup
属性可用于所有 HTML 元素，除了： <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 和 <title>.
## PC端事件触发
### 不点击的情况下
首先要说明一下

## 参考资料
- [MDN Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch)