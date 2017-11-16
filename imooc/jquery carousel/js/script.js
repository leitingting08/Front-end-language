$(document).ready(function(){
    var t,count,
        index=0,
        len=$(".banner img").length;
        
    //  初始化状态，在第一张
    $(".banner img:not(:first-child)").hide();
    $(".dots span:first-child").addClass("active");
   
   // 滑过鼠标清除定时器,滑开继续
    $(".banner").hover(function(){
        clearInterval(t);
    },
    function(){
        t=setInterval(showAuto, 2000);
    });

    //点击小圆点跳转到相应页面并且小圆点样式随之改变
    $(".dots span").click(function(){
      count=$(this).index();//获取当前点击对象的id属性值
      changOption(count);
    });

    //清除定时器
    if(t){
        clearInterval(t);
        t=null;
    }

    // 每隔两秒自动轮播
    t=setInterval(showAuto, 2000);

    //点击按钮切换
    $(".prev").click(function(){
        count=$(".active").index();
        count--;
        if(count < 0){count=len-1;}
        changOption(count);     
    });
    $(".next").click(function(){
        count=$(".active").index();
        count++;
        if(count > len-1){count=0;}
        changOption(count);
    });

// 封装自动切换的showAuto函数
function showAuto(){
        index++;
        if(index > len-1){index=0;}
    changOption(index);
}


//封装点击小圆点改变背景及自身样式的changeOption()函数
function changOption(curIndex){
   $(".dots span").siblings().removeClass("active");//查找其他子节点并移除类
   $(".dots span").eq(curIndex).addClass("active");//给当前点击的对象添加类
   $(".banner img").filter(":visible").hide().parent().children().eq(curIndex).show();
   index=curIndex;
}

});