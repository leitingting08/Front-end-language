# IFE 百度前端技术学院任务
##小薇学院（一共12个任务）
####task1-1    任务一：零基础HTML编码
只完成HTML代码编写，不涉及CSS
####task1-2    任务二：零基础HTML及CSS编码（一）
只完成HTML，CSS代码编写，不写JavaScript
####task1-3    任务三：三栏式布局
使用HTML与CSS实现三栏式布局
####task1-4     任务四：定位和居中问题
灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角
####task1-5     任务五：零基础HTML及CSS编码（二）
基于第一个任务“零基础HTML编码”的代码，在步骤一的代码基础上增加CSS样式代码的编写
使图片或`div`块相对于父元素固定而不随滚动条滚动，用容器`div`包裹图片或`div`块，例如:
`img {position：absolute；left:0px;top:0px;}`
####task1-6     任务六：通过HTML及CSS模拟报纸排版
注意事项
* 如果先写`font`，再写`line-height`，显示效果正常，如果先写`line-height`，再写`font`，则`line-heigh`t定义的效果会丢失
* 让文字显示在图片上，可以吧图片放在`div`里，设置`{z-index：-1;}` 注意浮动会让`z-index`失效
* 首字母大写且下划线粗细一致，示例：`<p class="ABOUT">about</p> <p class="ABOUT">technologe</p>`
``` .ABOUT {
  font-family:"微软雅黑";
  font-size: 24px;
  color: #000;
  line-height: 40PX;
  font-variant: small-caps;
  text-transform: capitalize;/*text-transform 属性这个属性会改变元素中的字母大小写*/
  text-decoration: underline;/*font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小*/
}```
