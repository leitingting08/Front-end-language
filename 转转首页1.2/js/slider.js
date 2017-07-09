///轮播
var t;
var index = 0;
/////自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 5) {
        index = 0
    }
    $("#box1 ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #fff",
    }).siblings().css({
        "background": "#ccc",
        "border": ""
    })

    $(".slider a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

///点击鼠标 图片切换
$("#box1 ul li").hover(function() {

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的

    $(".slider a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

/////////////上一张、下一张切换
$("#slider-btn-left").click(function() {
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击#slider-btn-right  index=0时  再点击 #slider-btn-left 为负数了 会出错
    {
        index = 5
    }
    $("#box1 ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #fff"
    }).siblings().css({
        "background": "#cccccc"
    })



    $(".slider a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

$("#slider-btn-right").click(function() {
    index++;
    if (index > 5) {
        index = 0
    }
    $(this).css({
        "opacity": "0.5"
    })
    $("#box1 ul li").eq(index).css({
        "background": "#999",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "#cccccc"
    })
    $(".slider a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});
$("#slider-btn-left,#slider-btn-right").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })
///

///////鼠标移进  移出
$("#box1 ul li,.slider a img,#slider-btn-right,#slider-btn-left ").hover(
    ////////鼠标移进
    function() {
        $('#slider-btn-right,#slider-btn-left').show()
        clearInterval(t);

    },
    ///////鼠标移开
    function() {
        //$('#slider-btn-right,#slider-btn-left').hide()
        //alert('aaa')
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 5) {
                index = 0
            }
            $("#box1 ul li").eq(index).css({
                "background": "#999",
                "border": "1px solid #ffffff"
            }).siblings().css({
                "background": "#cccccc"
            })
            $(".slider a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    })