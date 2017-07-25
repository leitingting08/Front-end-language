# jQuery笔记
## jQuery简介
### 引用jquery库：
* 1、下载jquery库，从本地文件引入;2、通过CDN（内容分发网络）引用jquery库CDN;
jquery：http://code.jquery.com/jquery.min.js
百度：http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js

### jQuery 名称冲突
* jQuery 使用名为 noConflict() 的方法来解决该问题
可自己命名（jq）来替代$符号 var jq=jQuery.noConflict();
***

## jquery 选择器
| 选择器        | 实例          | 选取  |
| ------------- |:-------------:| -----:|
| :eq(index)| $("ul li:eq(3)") |列表中的第四个元素|
| :gt(no)| $("ul li:gt(3)")|列出index大于3的元素|
| :lt(no)| $("ul li:lt(3)")|列出index小于3的元素|
| :not(selector))| $("input:not(:empty)")|所有不为空的 input 元素|
| :header| $(":header"))|所有标题元素 <h1> - <h6>|
| :animated| $("ul li:lt(3)")|所有动画元素|
| :contains(text)| 	$(":contains('W3School')")|包含指定字符串的所有元素|
| :empty|$(":empty")|无子（元素）节点的所有元素|
| :hidden| $("p:hidden")|所有隐藏的 <p> 元素|
| :visible| $("table:visible")|所有可见的表格|
| s1,s2,s3|$("th,td,.intro")|所有带有匹配选择的元素|
| [attribute]|$("[href]")|所有带有 href 属性的元素|

## jquery 事件
* jquery事件绑定的方法：1、bind(); 2、live(); 3、delegate(); 4、on();
bind()是直接绑定在元素上；live()则是通过冒泡的方式来绑定到元素上，绑定到document DOM节点上，支持动态数据。delegate()是更精确的小范围使用事件代理，性能优于live();
on()是最新的1.91版本整合之前的三种方式的新事件绑定机制
unbind()移除事件；one()只执行一次的事件；trigger() DOM加载完成后自动执行的事件；
die()解除live()方法绑定的事件


## jquery 效果
* 隐藏：hide() 显示：show() 显示和隐藏切换：toggle() speed可取slow、fast或毫秒
* 淡入：fadeIn() 淡出：fadeOut() 淡入淡出切换：fadeToggle()
fadeTo("slow",0.1); 慢慢淡出到透明度为0.1
* 向下滑动：slideDown() 向上滑动：slideUp() 向上向下滑动切换slideToggle()
* animate()创建自定义动画 1、可操作多个属性；2、必须用驼峰命名法；3、jquery库没有色彩动画，要生成色彩动画需要下载Color Animation插件；4、可定义相对值，用+=或-= 5、使用预定义的值，属性值可使用hide()、show()、toggle();6、使用队列功能，先后执行不同的动画。
* 在动画或效果完成之前对它们进行停止：stop()
* $(selector).hide(speed,callback) callback参数是一个在hide操作完成后被执行的函数。
* chaining 把动作和方法连接在一起

## jquery HTML
* 获得内容、设置内容和属性：text()、html()以及val() 获取属性attr()
* 添加元素：appen()、prepend()、after()、before()
##remove()和detatch()的区别
* remove():从DOM中删除所有匹配的元素。
这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。但除了这个元素本身得以保留之外，其他的比如绑定的事件，附加的数据等都会被移除。
* 删除元素：remove()、empty()、detach()
区别：detach():从DOM中删除所有匹配的元素。这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。所有绑定的事件、附加的数据等都会保留下来。而remove()和empty()会将所绑定的事件附加数据移除。empty()不会移除自身，而remove()会将自身也移除。
* 获取和设置css: 添加addClass()、删除removeClass()、切换：toggleClass()、设置和返回样式属性css()
* 尺寸：设置返回元素宽度（不包括内外边距和边框）width()、设置返回元素高度（不包括内外边距和边框）height()、设置返回元素宽度（包括内边距）innerWidth()、设置返回元素高度（包括内边距）innerHeight()、设置返回元素宽度（包括内边距和边框）outerWidth()设置返回元素高度（包括内边距和边框）outerHeight()、设置返回元素宽度（包括内外边距和边框）outerWidth(true)、设置返回元素高度（包括内外边距和边框）outerHeight(true)
* jQuery 1.8之后就不支持事件的切换，仅用来元素的隐藏与显示。
* 创建新元素的方法：
    var txt1="<p>Text1.</p>";            //以HTML创建新元素
    var txt2=$("<p></p>").text("Text2.");//以jquery创建新元素
    var txt3=document.createElement("p");
    txt3.innerHTML="Text3.";             //通过DOM来创建文本
    $("body").append(txt1,txt2,txt3);   //追加新元素

## jquery AJAX
* jquery中ajax常用请求方式：jquery get()和post()方法用于通过HTTP GET 或 POST请求从服务器请求数据；get从指定的资源请求数据 post向指定的资源提交要处理的数据
* load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

### JSON
* JSON：JavaScript 对象表示法（JavaScript Object Notation）。
``` {
"employees": [
{ "firstName":"Bill" , "lastName":"Gates" },
{ "firstName":"George" , "lastName":"Bush" },
{ "firstName":"Thomas" , "lastName":"Carter" }
]
}
```

这个 employee 对象是包含 3 个员工记录（对象）的数组。

* 把 JSON 文本转换为 JavaScript 对象  
JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据。  
方法一：用JavaScript 函数 eval()进行转换   
`var obj = eval ("(" + txt + ")");`  
eval() 函数可编译并执行任何 JavaScript 代码，存在安全隐患。  
方法二：用JSON 解析器(较新的浏览器)  
`obj = JSON.parse(txt);`

