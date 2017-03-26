# IFE 百度前端技术学院任务
## 小薇学院（一共12个任务）
### task1-1  任务一：零基础HTML编码
只完成HTML代码编写，不涉及CSS
### task1-2  任务二：零基础HTML及CSS编码（一）
只完成HTML，CSS代码编写，不写JavaScript
### task1-3  任务三：三栏式布局
使用HTML与CSS实现三栏式布局
### task1-4  任务四：定位和居中问题
灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角
### task1-5  任务五：零基础HTML及CSS编码（二）
基于第一个任务“零基础HTML编码”的代码，在步骤一的代码基础上增加CSS样式代码的编写
使图片或`div`块相对于父元素固定而不随滚动条滚动，用容器`div`包裹图片或`div`块，例如:
`img {position：absolute；left:0px;top:0px;}`
### task1-6  任务六：通过HTML及CSS模拟报纸排版
注意事项
* 如果先写`font`，再写`line-height`，显示正常，如果先写`line-height`，再写`font`，则`line-heigh`t定义的效果会丢失
* 让文字显示在图片上，可以吧图片放在`div`里，设置`{z-index：-1;}` 注意浮动会让`z-index`失效
* 首字母大写且下划线粗细一致，示例：`<p class="ABOUT">about</p> <p class="ABOUT">technologe</p>`  
` .ABOUT {  
font-family:"微软雅黑";  
font-size: 24px;  
color: #000;  
line-height: 40PX;  
font-variant: small-caps;  
text-transform: capitalize;  
text-decoration: underline;  
}`
### task1-7  任务七：实现常见的技术产品官网的页面架构及样式布局
* a 标签鼠标放上去样式改变:例 `a:hover{text-decoration：underline}`;鼠标放上去会显示下划线
### task1-8  任务八：响应式网格（栅格化）布局
* `@media` 媒体查询的使用，[bootstrap网格系统](http://www.w3cschool.cn/bootstrap/bootstrap-v2-grid-system.html)
### task1-9  任务九：使用HTML/CSS实现一个复杂页面
### task1-10 任务十：Flexbox 布局练习
* 通过设置 display 属性的值为 flex 或 inline-flex来定义弹性容器
* 弹性容器里子元素自动成为弹性项目，并且弹性项目的float、clear和vertical-align属性将失效
* `flex-direction:row`(主轴为水平方向，起点在左端) | `row-reverse`(主轴为水平方向，起点在右端)  `column`(主轴为垂直方向，起点在上沿) `column-reverse`(主轴为垂直方向，起点在下沿);
* `flex-wrap:flex-wrap: nowrap` (默认不换行)| `wrap`(可以多行，第一行在上方) | `wrap-reverse`(可以多行，第一行在下方);
* `justify-content:flex-start` (左对齐（默认）)| `flex-end`(右对齐) | `center`(居中对齐) | `space-between`(两端对齐，项目之间的间距相等) | `space-around`(均匀对齐，每个项目两端的间距相等);
* `align-items:flex-start`(交叉轴起点对齐) | `flex-end`(交叉轴终点对齐) | `center`(交叉轴居中对齐) | `baseline`(第一行文字的底部对齐) | `stretch`(如果项目没设置高度或者高度为`auto`,那么项目拉伸充满整个交叉轴空间);
* `align-content`(定义多行轴线的对齐方式（如果只有一行，该属性不起作用）
### task1-11 任务十一：移动Web页面布局实践
### task1-12 任务十二：学习CSS 3的新特性

## 斌斌学院
### task2-1  任务一：零基础JavaScript编码（一）
* 通过id名称获取元素`documentgetElementById('id')`
* 事件：鼠标事件、键盘事件、系统事件、表单事件...;
鼠标事件：`onclick`点击事件 `onmouseover`鼠标移入事件 `onmouseout`鼠标移出事件 `onmousemove`鼠标移动事件  
* 函数调用：function myFunction(){}  调用方法：
1、直接调用：myFunction； 2、事件调用：元素.事件 = 函数名 oDiv.onclick = myFunction；  
function (){} //匿名函数 调用方法：元素.事件 = function (){}；
* 测试：alert();弹出带一个确定按钮的警告框  
* onload 加载完执行 `window.onload = myFunction;`
* 希望把某个元素移出视线：  
1、`display:none;`(显示为无) 
2、`visibility:hidden;`(让元素隐藏)  
3、改变`width/height`  
4、透明度为0 
5、改变元素`left/top`  
6、拿一个白色`div`盖住  
7、`margin`负值
