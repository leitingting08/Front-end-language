# jQuery笔记
## jQuery简介
### 引用jquery库：
* 1、下载jquery库，从本地文件引入;2、通过CDN（内容分发网络）引用jquery库CDN;
jquery：http://code.jquery.com/jquery.min.js
百度：http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js

### jQuery 名称冲突
* jQuery 使用名为 noConflict() 的方法来解决该问题
可自己命名（jq）来替代$符号 var jq=jQuery.noConflict();

## jquery效果
* 隐藏：hide() 显示：show() 显示和隐藏切换：toggle() speed可取slow、fast或毫秒
* 淡入：fadeIn() 淡出：fadeOut() 淡入淡出切换：fadeToggle()
fadeTo("slow",0.1); 慢慢淡出到透明度为0.1
* 向下滑动：slideDown() 向上滑动：slideUp() 向上向下滑动切换slideToggle()
* animate()创建自定义动画 1、可操作多个属性；2、必须用驼峰命名法；3、jquery库没有色彩动画，要生成色彩动画需要下载Color Animation插件；4、可定义相对值，用+=或-= 5、使用预定义的值，属性值可使用hide()、show()、toggle();6、使用队列功能，先后执行不同的动画。
* 在动画或效果完成之前对它们进行停止：stop()
* $(selector).hide(speed,callback) callback参数是一个在hide操作完成后被执行的函数。
* chaining 把动作和方法连接在一起

## juery HTML
* 获得内容、设置内容和属性：text()、html()以及val() 获取属性attr()
* 添加元素：appen()、prepend()、after()、before()
* 删除元素：remove()、empty()、detach()
区别：detach():从DOM中删除所有匹配的元素。这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。所有绑定的事件、附加的数据等都会保留下来。而remove()和empty()会将所绑定的事件附加数据移除。empty()不会移除自身，而remove()会将自身也移除。
* 获取和设置css: 添加addClass()、删除removeClass()、切换：toggleClass()、设置和返回样式属性css()
* 尺寸：设置返回元素宽度（不包括内外边距和边框）width()、设置返回元素高度（不包括内外边距和边框）height()、设置返回元素宽度（包括内边距）innerWidth()、设置返回元素高度（包括内边距）innerHeight()、设置返回元素宽度（包括内边距和边框）outerWidth()设置返回元素高度（包括内边距和边框）outerHeight()、设置返回元素宽度（包括内外边距和边框）outerWidth(true)、设置返回元素高度（包括内外边距和边框）outerHeight(true)
* toggle() jQuery 1.8之后就不支持事件的切换，仅用来元素的隐藏与显示。
* 创建新元素的方法：
    var txt1="<p>Text1.</p>";            //以HTML创建新元素
    var txt2=$("<p></p>").text("Text2.");//以jquery创建新元素
    var txt3=document.createElement("p");
    txt3.innerHTML="Text3.";             //通过DOM来创建文本
    $("body").append(txt1,txt2,txt3);   //追加新元素
