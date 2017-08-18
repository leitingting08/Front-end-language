$(document).ready(function(){
// 点击弹出登录框
$("#loginLink").click(function(){
	var loginHtml = $("#loginHtml").html();
     showLayer(loginHtml,260,300,closeCallback);

     $("#loginHtml").blur(function(){
        // var username = $("input[name='username']").val();
        // var password = $("input[name='password']").val();
        // if(username === 'imooc' && password === 'imooc'){
        // 	alert("登录成功");
        // }else{
        // 	$(".error-msg").html("账号密码输入错误");
        // }
     });
});

$("#regeLink").click(function(){
	var regeHtml = $("#regeHtml").html();
     showLayer(regeHtml,260,260,closeCallback);

     $("#loginSubmitBtn").click(function(){
        // var username = $("input[name='username']").val();
        // var password = $("input[name='password']").val();
        // if(username === 'imooc' && password === 'imooc'){
        // 	alert("注册成功");
        // }else{
        // 	$(".error-msg").html("账号密码输入错误");
        // }
     });
});

function closeCallback(){
	$(".error-msg").html("");
}


//显示弹出层
function showLayer(html,width,height,closeCallback){
	$(".layer-mask").css('display','block');
	$(".layer-pop").css('display','block');
	$(".layer-content").css({
		width:width,
		height:height
	});
	$(".layer-content").html(html);

	$(".close-btn").click(function(){
		hideLayer();
		closeCallback();
	});
}

//隐藏弹出层
function hideLayer(){
   $(".layer-mask").hide();
   $(".layer-pop").hide();
}


//点击框里的登录，注册字，跳转到相应页面
$("#loge").click(function(){
    showLayer(logeHtml,260,300,closeCallback);
});

$("#rege").click(function(){
    showLayer(regeHtml,260,260,closeCallback);
});


//鼠标滑过列表显示下拉菜单
$(".li-first").hover(function(){
  $(".uli").css({"background-color":"#fff","border-left":"1px solid #ccc","border-right":"1px solid #ccc"});
  $(".li-last").css("border-bottom","1px solid #ccc")
});




//鼠标滑过购物车
$(".buy").hover(function(){
  $(this).css({"background-color":"#fff","color":"#f01414"});
  $(".c").attr("src","img/icon/25.png");
  $(".v").attr("src","img/icon/24.png");
  $(".buy span").css("color","#f01414");
  $(".div1").show();
},function(){
  $(this).css({"background-color":"#f01414","color":"#fff"});
  $(".c").attr("src","img/icon/26.png");
  $(".v").attr("src","img/icon/23.png");
  $(".buy span").css("color","#fff");
  $(".div1").hide();
});







//轮播图
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




});