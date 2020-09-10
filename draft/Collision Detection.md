# Collision Detection

## 简介


碰撞检测用于检测多个不同图形对象的交叉点，在游戏中比较常见。

下面从一些简单的图形开始，介绍碰撞检测的一些算法原理。主要有下面几个方面：
- Point
- Line
- Rectangle
- Polygon
- Transformation

最后会展示基于上面的方法做的一个[小游戏][url-lab-game]。


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
<details>
<summary>Rectangle/Point</summary>

思路：点的坐标是否在矩形的坐标范围之内。

[示例页面][url-lab-8]

```js
/*
 * (px,py) 点的坐标
 * (rx,ry) 矩形顶点的坐标
 * rw 矩形的宽度
 * rh 矩形的高度
 */
function checkRectanglePoint({px,py,rx,ry,rw,rh}) {
  const isTrue = px >= rx && // 左边界
                 px <= rx + rw && // 右边界
                 py >= ry && // 上边界
                 py <= ry + rh; // 下边界
  if (isTrue) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

<details>
<summary>Rectangle/Rectangle</summary>

**矩形与矩形**的碰撞检测，看下面一张图：

![rect-rect][url-local-2]

思路：根据点的坐标比较。

[示例页面][url-lab-9]

```js
/*
 * (px,py) 点的坐标
 * (rx,ry) 矩形顶点的坐标
 * rw 矩形的宽度
 * rh 矩形的高度
 */
function checkRectanglePoint({px,py,rx,ry,rw,rh}) {
  const isTrue = px >= rx && // 左边界
                 px <= rx + rw && // 右边界
                 py >= ry && // 上边界
                 py <= ry + rh; // 下边界
  if (isTrue) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>

<details>
<summary>Rectangle/Circle</summary>

思路：
1. 首先要确定圆处于矩形那个边界；
2. 然后在边界上确定与圆心距离最短的点；
3. 最后使用勾股定理计算出距离，与圆心半径进行比较。


[示例页面][url-lab-10]

```js
/*
 * (cx,cy) 圆心的坐标
 * radius 圆的半径
 * (rx,ry) 矩形顶点的坐标
 * rw 矩形的宽度
 * rh 矩形的高度
 */
function checkRectangleCircle({cx,cy,radius,rx,ry,rw,rh}) {
  let nearestX = cx,nearestY = cy; // 初始化边界上离圆心最近的点坐标
  if (cx < rx) {
    nearestX = rx;
  } else if (cx > rx + rw) {
    nearestX = rx + rw;
  }
  if (cy < ry) {
    nearestY = ry;
  } else if (cy > ry + rh) {
    nearestY = ry + rh;
  }
  const distX = cx-nearestX;
  const distY = cy-nearestY;
  const distance = Math.sqrt( (distX*distX) + (distY*distY) );

  if (distance <= radius) {
    return true; // 发生碰撞
  } else {
    return false; // 没有碰撞
  }
}
```

</details>


## Polygon
<details>
<summary>Polygon/Point</summary>

思路：**多边形与点**的碰撞检测，需要每一条边与点进行检测，才能确定是否产生了碰撞。


[示例页面][url-lab-11]

```js
/*
 * points 多边形顶点坐标，形式为 [[x1,y1],[x2,y2]]
 * (px,py) 检测点坐标
 */
function checkPolygonPoint({points,px,py}) {
  let collision = false;
  const pointsLen = points.length;

  for (let index = 0; index < pointsLen; index++) {
    const currentPoint = points[index];
    const next = index === pointsLen-1 ? 0:index+1;
    const nextPoint = points[next];
    const [cx,cy] = currentPoint;
    const [nx,ny] = nextPoint;
    // 乔丹曲线定理
    const judgeX = px < (nx-cx)*(py-cy) / (ny-cy)+cx;
    const judgeY = (cy >= py && ny < py) || (cy < py && ny >= py);
    if (judgeX && judgeY) {
      collision = !collision;
    }
  }

  return collision;
}
```

</details>


<details>
<summary>Polygon/Circle</summary>

思路：**多边形与圆**的碰撞检测，可以分解为多边形的边与圆的碰撞检测，只要有一条边产生了碰撞，就可以进行判定。

这个时候可以使用之前介绍的关于 **Line/Circle** 检测的方法。

[示例页面][url-lab-12]

```js
/*
 * points 多边形顶点坐标，形式为 [[x1,y1],[x2,y2]]
 * (cx,cy) 圆心坐标
 * radius 圆半径
 */
function checkPolygonCircle({points,cx,cy,radius}) {
  const pointsLen = points.length;

  for (let index = 0; index < pointsLen; index++) {
    const currentPoint = points[index];
    const next = index === pointsLen-1 ? 0:index+1;
    const nextPoint = points[next];
    const [x1,y1] = currentPoint;
    const [x2,y2] = nextPoint;
    const collision = checkLineCircle({x1,y1,x2,y2,cx,cy,radius});
    if (collision) {
      return true;
    }
  }

  return false;
}
```

</details>

<details>
<summary>Polygon/Rectangle</summary>

思路：**多边形与矩形**的碰撞检测，可以分解为多边形的边与矩形的碰撞检测，只要有一条边产生了碰撞，就可以进行判定。

这个时候可以使用之前介绍的关于 **Line/Rectangle** 检测的方法。

[示例页面][url-lab-13]

```js
/*
 * points 多边形顶点坐标，形式为 [[x1,y1],[x2,y2]]
 * (rx,ry) 矩形左上角顶点坐标
 * rw 矩形宽度
 * rh 矩形高度
 */
function checkPolygonRectangle({points,rx,ry,rw,rh}) {
  const pointsLen = points.length;

  for (let index = 0; index < pointsLen; index++) {
    const currentPoint = points[index];
    const next = index === pointsLen-1 ? 0:index+1;
    const nextPoint = points[next];
    const [x1,y1] = currentPoint;
    const [x2,y2] = nextPoint;
    const collision = checkLineRectangle({x1,y1,x2,y2,rx,ry,rw,rh});
    if (collision) {
      return true;
    }
  }

  return false;

}
```

</details>





<details>
<summary>Polygon/Line</summary>

思路：**多边形与直线**的碰撞检测，可以分解为多边形的边与直线的碰撞检测，只要有一条边产生了碰撞，就可以进行判定。

这个时候可以使用之前介绍的关于 **Line/Line** 检测的方法。

[示例页面][url-lab-14]

```js
/*
 * points 多边形顶点坐标，形式为 [[x1,y1],[x2,y2]]
 * (x1,y1) 直线线端点坐标
 * (x2,y2) 直线另一个端点坐标
 */
function checkPolygonLine({points,x1,y1,x2,y2}) {
  const pointsLen = points.length;

  for (let index = 0; index < pointsLen; index++) {
    const currentPoint = points[index];
    const next = index === pointsLen-1 ? 0:index+1;
    const nextPoint = points[next];
    const [x3,y3] = currentPoint;
    const [x4,y4] = nextPoint;

    const collision = checkLineLine({x1,y1,x2,y2,x3,y3,x4,y4});
    if (collision) {
      return true;
    }
  }

  return false;

}
```

</details>

<details>
<summary>Polygon/Polygon</summary>

思路：**多边形与多边形**的碰撞检测，检测一个多边形任意边是否与另外一个多边形的任意边产生碰撞。

这个时候可以使用前面介绍的关于 **Polygon/Line** 检测的方法。

[示例页面][url-lab-15]

```js
/*
 * points1 多边形1顶点坐标，形式为 [[x1,y1],[x2,y2]]
 * points2 多边形2顶点坐标，形式为 [[x1,y1],[x2,y2]]
 */
function checkPolygonPolygon({points1,points2}) {
  const pointsLen = points1.length;

  for (let index = 0; index < pointsLen; index++) {
    const currentPoint = points1[index];
    const next = index === pointsLen-1 ? 0:index+1;
    const nextPoint = points1[next];
    const [x1,y1] = currentPoint;
    const [x2,y2] = nextPoint;
    const collision = checkPolygonLine({points:points2,x1,y1,x2,y2});
    if (collision) {
      return true;
    }
  }

  return false;

}
```

</details>

## Transformation

<details>
<summary>到目前为止介绍的都是静态的检测，动态的碰撞检测又是如何？</summary>

思路：基于 canvas 的动画原理是每隔一段时间进行重绘，所以在检测的时候，实际上是在特定的时刻，进行静态的碰撞检测，所以之前介绍的方法同样适用。

关键之一是如何获取相关点动态变化的坐标，下面以平移的动画效果为例进行说明。

在 canvas 上进行绘制时，都是基于坐标系进行定位，画布左上角为坐标系原点，水平向右为 X 轴正方向，垂直向下为 Y 轴正方向。绘制一个矩形 `rect(20, 20, 40, 40)` ，在坐标系上是这样的：

![origin][url-local-3]

如果想要水平向右移动 60 像素，垂直向下移动 80 像素，可以直接进行坐标相加：`rect(20 + 60, 20 + 80, 40, 40)` 。

![new-coord][url-local-4]

但还有另外一种更有趣的方式：**移动整个坐标轴**。如果把整个坐标轴水平向右移动 60 像素，垂直向下移动 80 像素，在视觉上是完全一样的。 canvas 的 `translate` 方法就是使用这种方式。

![moved-grid][url-local-5]

从上图可以发现，这种方式不用考虑矩形的坐标变化，在处理比较复杂的图形时，会方便很多。

[示例页面][url-lab-16]

</details>


## <a name="reference"></a> 参考资料
- [CollisionDetection][url-github-1]

[url-github-1]:https://github.com/jeffThompson/CollisionDetection

[url-article-1]:https://www.shuxuele.com/algebra/vectors-dot-product.html

[url-lab-1]:https://xxholic.github.io/lab/blog/58/point-point.html
[url-lab-2]:https://xxholic.github.io/lab/blog/58/point-circle.html
[url-lab-3]:https://xxholic.github.io/lab/blog/58/circle-circle.html
[url-lab-4]:https://xxholic.github.io/lab/blog/60/line-point.html
[url-lab-5]:https://xxholic.github.io/lab/blog/60/line-circle.html
[url-lab-6]:https://xxholic.github.io/lab/blog/60/line-line.html
[url-lab-7]:https://xxholic.github.io/lab/blog/60/line-rectangle.html
[url-lab-8]:https://xxholic.github.io/lab/blog/59/rectangle-point.html
[url-lab-9]:https://xxholic.github.io/lab/blog/59/rectangle-rectangle.html
[url-lab-10]:https://xxholic.github.io/lab/blog/59/rectangle-circle.html
[url-lab-11]:https://xxholic.github.io/lab/blog/61/polygon-point.html
[url-lab-12]:https://xxholic.github.io/lab/blog/61/polygon-circle.html
[url-lab-13]:https://xxholic.github.io/lab/blog/61/polygon-rectangle.html
[url-lab-14]:https://xxholic.github.io/lab/blog/61/polygon-line.html
[url-lab-15]:https://xxholic.github.io/lab/blog/61/polygon-polygon.html
[url-lab-16]:https://xxholic.github.io/lab/blog/63/translate-rotate.html

[url-lab-game]:https://xxholic.github.io/lab/blog/cast-money/index.html

[url-local-1]:./images/collision-detection/line-point.jpg
[url-local-2]:./images/collision-detection/rect-rect.jpg
[url-local-3]:./images/collision-detection/original.png
[url-local-4]:./images/collision-detection/new-coord.png
[url-local-5]:./images/collision-detection/moved-grid.png

<details>
<summary>无忧无虑的秘诀</summary>

![poster][url-local-poster]

</details>

[url-local-poster]:./images/collision-detection/poster.png