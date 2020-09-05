# Collision Detection

## 简介


碰撞检测用于检测多个不同图形对象的交叉点，在游戏中比较常见。

下面从一些简单的图形开始，介绍碰撞检测的一些算法原理。主要有下面几个方面：
- Point
- Line
- Rectangle
- Polygon
- Transformation

最后会展示基于上面的方法做的一个小游戏。


## Point

<details>
<summary>Point/Point</summary>

**点与点**的碰撞可以说是最基础的碰撞检测。

思路：检查它们的 X 和 Y 坐标是否一样。

[示例页面][url-lab-1]

```js
/*
 * (x1,x2) 点的坐标
 * (y1,y2) 点的坐标
 */
function checkPointPoint(x1,x2,y1,y2) {
  if (x1 == x2 && y1 == y2) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

<details>
<summary>Point/Circle</summary>

思路：比较点和圆心之间的距离 `distance` 是否**小于或等于**圆的半径 `r` 。

两个点之间的距离，在几何上进行转换，使用勾股定理可以得出。

[示例页面][url-lab-2]

```js
/*
 * (px,py) 点的坐标
 * (cx,cy) 圆心的坐标
 * radius 圆的半径
 */
function checkPointCircle({px,py,cx,cy,radius}) {
  const minusX = px - cx;
  const minusY = py - cy;
  const distance = Math.sqrt(minusX*minusX + minusY*minusY);
  if (distance <= radius) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

<details>
<summary>Circle/Circle</summary>

思路：比较两个圆心之间的距离 `distance` 是否**小于或等于**两个圆的半径之和 `r1+r2` 。

[示例页面][url-lab-3]

```js
/*
 * (c1x,c1y) 圆心的坐标
 * (c2x,c2y) 圆心的坐标
 * r1,r2 圆的半径
 */
function checkCircleCircle({c1x,c1y,c2x,c2y,r1,r2}) {
  const minusX = c1x - c2x;
  const minusY = c1y - c2y;
  const distance = Math.sqrt(minusX*minusX + minusY*minusY);
  if (distance <= r1+r2) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

## Line

<details>
<summary>Line/Point</summary>

**线与点**的碰撞检测，观察下面一张图：

![line-point][url-local-1]

思路：当点在线上时，到两个端点的距离之和与线的长度相同。

注意：考虑到计算的精度误差，可以设置一个误差允许范围值，这样会感觉更加自然一些。

[示例页面][url-lab-4]

```js
/*
 * (x1,y1) 线的一个端点
 * (x2,y2) 线的另一个端点
 * (px,py) 检测点的坐标
 */
function checkLinePoint({x1,y1,x2,y2,px,py}) {
  const d1 = getLen([px,py],[x2,y2]);
  const d2 = getLen([px,py],[x2,y2]);
  const lineLen = getLen([x1,y1],[x2,y2]);
  const buffer = 0.1; // 误差允许范围
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}

/*
 * 勾股定理计算两点间直线距离
 * point1 线的一个端点
 * point2 线的另一个端点
 */
function getLen(point1,point2) {
  const [x1,y2] = point1;
  const [x2,y2] = point1;
  const minusX = x2-x1;
  const minusY = y2-y1;
  const len = Math.sqrt(minusX*minusX + minusY*minusY);
  return len;
}
```

</details>

<details>
<summary>Line/Circle</summary>

思路：找到线上离圆心最近点的距离，与圆的半径进行比较。

提示：离圆心最近点，使用[矢量的点积][url-article-1]可以推导计算得出。

  <details>
  <summary>推导计算</summary>

  ```js
  /**
   *
   * a 代表线的向量
   * t 系数
   * p1 直线上任意一点
   * p0 非直线上的一点
   * pt 直线上离 p0 最近的一点
   *
   * pt = p1 + t*a  // p1 和 pt 都在直线上，存在这样成立的关系系数 t
   *
   * (a.x,a.y)*(pt.x-p0.x,pt.y-p0.y) = 0 // 垂直的向量，点积为 0
   *
   * (a.x,a.y)*( (p1+t*a).x-p0.x,(p1+t*a).y-p0.y) = 0 // 带入 pt
   *
   * a.x *(p1.x + t*a.x - p0.x) + a.y *(p1.y + t*a.y - p0.y)  = 0
   * t*(a.x*a.x + a.y*a.y) = a.x*(p0.x-p1.x)+a.y*(p0.y-p1.y)
   * t = (a.x*(p0.x-p1.x)+a.y*(p0.y-p1.y)) / ((a.x*a.x + a.y*a.y))
   *
   * 得出系数 t 的值后，代入到一开始的公式中，就可以得出 pt 的坐标
   */
  ```

  </details>

[示例页面][url-lab-5]

```js
/*
 * (x1,y1) 线的一个端点
 * (x2,y2) 线的另一个端点
 * (px,py) 圆心的坐标
 * radius  圆的半径
 */
function checkLineCircle({x1,y1,x2,y2,cx,cy,radius}) {
  // 判断圆内的情况
  const isInside1 = checkPointCircle({px:x1,py:y1,cx,cy,radius});
  const isInside2 = checkPointCircle({px:x2,py:y2,cx,cy,radius});
  if (isInside1 || isInside2) {
    return true
  }

  // 使用矢量的点积推导得出的计算方法
  const pointVectorX = x1 - x2;
  const pointVectorY = y1 - y2;
  const t = (pointVectorX*(cx - x1) + pointVectorY*(cy-y1))/(pointVectorX*pointVectorX+pointVectorY*pointVectorY);
  const closestX = x1 + t*pointVectorX;
  const closestY = y1 + t*pointVectorY;

  // 几何中矢量是无限延伸的，所以实际中要判断是否在线段上
  const isOnSegment = checkLinePoint({x1,y1,x2,y2, px:closestX,py:closestY});
  if (!isOnSegment) return false;

  const distX = closestX - cx;
  const distY = closestY - cy;
  const distance = Math.sqrt( (distX*distX) + (distY*distY) );

  if (distance <= radius) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}

```

</details>

<details>
<summary>Line/Line</summary>

思路：在坐标系里面，直线都可以使用二元一次方程表示，当直线方程的系数满足一定条件时，就一定会相交。

[示例页面][url-lab-6]

```js
/*
 * (x1,y1) 线1的一个端点
 * (x2,y2) 线1的另一个端点
 * (x3,y3) 线2的一个端点
 * (x4,y4) 线2的另一个端点
 */
function checkLineLine({x1,y1,x2,y2,x3,y3,x4,y4}) {
  // 根据两个点可以得出直线的方程，拿到系数
  const t1 = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
  const t2 = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

  // 直线相交的条件
  if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

<details>
<summary>Line/Rectangle</summary>

思路：**直线与矩形**的碰撞检测，可以转换为直线与矩形四条边的碰撞检测。

[示例页面][url-lab-7]

```js
/*
 * (x1,y1) 线的一个端点
 * (x2,y2) 线的另一个端点
 * (rx,ry) 矩形顶点坐标
 * rw 矩形宽度
 * rh  矩形高度
 */
function checkLineRectangle({x1,y1,x2,y2,rx,ry,rw,rh}) {
  const isLeftCollision =   checkLineLine(x1,y1,x2,y2, x3:rx,y3:ry,x4:rx, y4:ry+rh);
  const isRightCollision =  checkLineLine(x1,y1,x2,y2, x3:rx+rw,y3:ry, x4:rx+rw,y4:ry+rh);
  const isTopCollision =    checkLineLine(x1,y1,x2,y2, x3:rx,y3:ry, x4:rx+rw,y4:ry);
  const isBottomCollision = checkLineLine(x1,y1,x2,y2, x3:rx,y3:ry+rh, x4:rx+rw,y4:ry+rh);

  if (isLeftCollision || isRightCollision || isTopCollision || isBottomCollision ) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

## Rectangle

## Polygon


## Transformation


<div align="right"><a href="#index">Back to top :arrow_up:</a></div>

## <a name="reference"></a> 参考资料
- [article][url-article-1]

[url-article-1]:https://www.shuxuele.com/algebra/vectors-dot-product.html

[url-lab-1]:https://xxholic.github.io/lab/blog/58/point-point.html
[url-lab-2]:https://xxholic.github.io/lab/blog/58/point-circle.html
[url-lab-3]:https://xxholic.github.io/lab/blog/58/circle-circle.html
[url-lab-4]:https://xxholic.github.io/lab/blog/60/line-point.html
[url-lab-5]:https://xxholic.github.io/lab/blog/60/line-circle.html
[url-lab-6]:https://xxholic.github.io/lab/blog/60/line-line.html
[url-lab-7]:https://xxholic.github.io/lab/blog/60/line-rectangle.html

[url-local-1]:./images/collision-detection/line-point.jpg

<details>
<summary>:wastebasket:</summary>

![n-poster][url-local-poster]

</details>

[url-book]:https://book.douban.com/subject/26916012/
[url-local-poster]:./images/n/poster.jpg
