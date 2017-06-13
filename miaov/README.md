# miaov
## HTML+CSS学习笔记  
#### 标签、选择符、超链接及SEO 
* <! DOCTYPE html> 声明文档类型 <meta charset="utf-8"/>代码编码格式  utf-8 国际标准  gb2312 中文简体标准  
* 背景 background:bule url(icon.gif) no-repeat 10px(距x轴距离,可用center居中，可用像素值、方位值和百分数) 50px(距y轴距离，可用center居中，可用像素值、方位值和百分数); repeat 重复  repeat-x 沿x轴重复   repeat-y 沿y轴重复  background:bule url(icon.gif) center top no-repeat grey fixed; 复合属性background
* 边框：border:10px solid red;边框样式：solid实线dashed虚线dotted点线（ie6不兼容）
* 内外边距  外边距的问题：1、上下外边距会叠压；2、父子级包含的时候，子级的margin-top会传递给父级；（用父级的内边距替代子集外边距）margin-left：auto；margin-right:auto; 和margin:0 auto;效果一样 
* <a href="#box">锚点</a>  a标签的作用：链接、下载、锚点。a标签的伪类：link 未访问（默认） hover 鼠标悬停（鼠标滑过） active 链接激活（鼠标点击） visited 访问过后（点击过后）  同级样式，后面的会覆盖前面的样式,若要使四个伪类持续触发，顺序为：link visited hover active(记忆方法：love hate) 
* strong标签的作用是强调（页面展示为粗体） em标签的作用是强调（页面展示为斜体） span标签用于区分样式 ol有序列表 ul无序列表 
* SEO 搜索引擎优化：1、页面标签语义化；2、使用对SEO有利的标签：h1/h2/h3/strong/em3、提高页面关键词密度；
* 选择器优先级:类型(1)<class(10)<id(100)<style行间样式(1000)<js
#### 标签类型转换、样式重置
* 内联，内嵌，行内属性标签：`<b>, <td>, <a>, <span>`  
1、默认同行可以继续跟同类型标签；  
2、内容撑开宽度;  
3、不支持宽高;  
4、不支持上下的margin和padding;  
5、代码换行被解析
* 块属性标签：`<h1>, <p>, <ul>, <table>`  
1、默认独占一行显示；  
2、没有宽度时，默认撑满一排;  
3、支持所有css命令.
* display:block;  显示为块  display:inline;  显示为内嵌  inline-block一行内的块
* inline-block的特性：  
1、块在一行显示；  
2、行内属性标签支持宽高；  
3、没有宽度的时候内容撑开宽度  
问题：  
1、代码换行被解析；  
2、ie6 ie7 不支持块属性标签的inline-block;
#### 浮动原理及清浮动
* 浮动: left/right/none	元素加了浮动，会脱离文档流(文档流是文档中可显示对象在排列时所占用的位置) ，按照指定的一个方向移动直到碰到父级的边界或者另外一个浮动元素停止  
1.使块元素在一行显示  
2.使内嵌支持宽高  
3.不设置宽度的时候宽度由内容撑开  
4.脱离文档流  
5.提升层级半层
* 清浮动的方法  
1.加高  
问题：扩展性不好  
2.父级浮动  
问题：页面中所有元素都加浮动，margin左右自动失效  
3.inline-block 清浮动方法：  
问题：margin左右自动失效；  
4.空标签清浮动  
问题：IE6 最小高度 19px；（解决后IE6下还有2px偏差）  
5.br清浮动  
问题：不符合工作中：结构、样式、行为，三者分离的要求（不符合w3c标准）。  
6.after伪类 清浮动方法（现在主流方法）  
`.clear:after{content:'';display:block;clear:both;}`  
`.clear{zoom:1;}`  
`afte`r伪类： 元素内部末尾添加内容；:after{content"添加的内容";} IE6，7下不兼容  
`zoom` 缩放   触发IE下 haslayout，使元素根据自身内容计算宽高。  
7.`overflow:hidden` 清浮动方法；  
问题：需要配合 宽度 或者 zoom 兼容IE6 IE7；  
`overflow:  scroll | auto | hidden；overflow:hidden;`溢出隐藏（裁刀！）
#### 浮动的问题、IE6、IE7的bug
* IE6下的双边距BUG:在IE6下，块元素有浮动和横向margin的时候，横向的margin值会被放大成两倍   
解决办法:` display:inline;`  
* IE6，7下li的间隙: 在IE6，7下li本身没浮动,但是li内容有浮动的时候，li下边就会产生几px的间隙   
解决办法: 1.给li加浮动  2.给li加vertical-align:top;
* vertical-align 垂直对齐方式  
1、加垂直对齐方式的同排元素都要加垂直对齐方式；  
2、垂直对齐方式可以解决元素下方间隙问题；
* 图片下方间隙问题  
1、display:block; (改变标签本身特性)  
2、overflow:hidden; (必须知道图片高度)  
3、vertical-align (暂时最完美的方案)
#### 定位、层级、滤镜遮罩
* position:relative 相对定位  
1、不影响元素本身特性；  
2、不使元素脱离文档流；  
3、如果没有定位偏移量，对元素本身没有任何影响
* 绝对定位：position：absolute；  
1、使元素完全脱离文档流  
2、使内嵌支持宽高  
3、块属性标签内容撑开宽度  
4、如果有定位父级相对于定位父级发生偏移，没有定位父级相对于整个文档发生偏移  
5、相对定位一般都是配合绝对定位使用  （定位元素默认后者的层级比前者高）  
position：fixed;固定定位，可以使块脱离文档流，不随滚动条滚动ie6不支持（要配合js使用）  
position：static（默认）  
position:inherit(继承父级属性值)  
position兼容性问题：ie6下父级的overflow包不住子级的相对定位  
position：absolute  在ie6下定位元素的父级宽高都为奇数那么在ie6下定位元素的right和bottom都有1像素的偏差(清浮动的第八种方法：绝对定位固定定位清浮动)
* z-index：1；定位层级
* 样式选择器优先级： `.box a{}` `a.link{}` 两者的样式优先级一样
* 滤镜遮罩    
标准浏览器下 不透明度：opacity 0-1；之间; ie(ie8以下)私有 filter:alpha(opacity=50);
## JS学习笔记
