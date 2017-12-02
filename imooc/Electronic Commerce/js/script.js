$(document).ready(function(){
// 点击弹出登录框
$(document).on('click','#loginLink',function(){
    showLayer();
    $('#loginHtml').show();
    $('#regeHtml').hide();
    $('#loge').addClass('active');
    $('#rege').removeClass('active');
});

$(document).on('click','#regeLink',function(){
    showLayer();
    $('#loginHtml').hide();
    $('#regeHtml').show();
    $('#rege').addClass('active');
    $('#loge').removeClass('active');
});


//显示弹出层
function showLayer(){
    $(".layer-mask").show();
    $(".layer-pop").show();
    //隐藏弹出层
    $(".close-btn").click(function(){
      $(".layer-mask").hide();
    $(".layer-pop").hide();
    });
}


//点击登录注册进行切换
$(document).on('click','.layer-content p a',function(){
  var index = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parents('.layer-content').find('.con').eq(index).show().siblings('.con').hide();
})

//登录注册的验证
function validate(submit){
  $(submit).click(function(){
     if($('[name=username]')!==/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/ | /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/){
      $('.err-msg1').html("请输入正确的邮箱或手机号码！")
     }
  });
}
validate('#loginSubmitBtn');


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

  $(".div1").hover(function(){
    $(this).show();
  },function(){
    $(this).hide();
  $(".buy").css({"background-color":"#f01414","color":"#fff"});
  $(".c").attr("src","img/icon/26.png");
  $(".v").attr("src","img/icon/23.png");
  $(".buy span").css("color","#fff");
});
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

$(".f").show();
$(".ul1").show();
});


//商品楼层的tab切换
$(document).on('click','.row2 h2 p a',function(){
  var index = $(this).index();
  $(this).parents('.row2').find('img').removeClass('imgshow');
  $(this).find('img').addClass('imgshow');
  $(this).parents('.row2').find('ul').hide();
  $(this).parents('.row2').find('ul').eq(index).show();
})
