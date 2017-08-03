//封装一个代替getElementById()的方法
function $(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

window.onload=function(){
var index = 0,
    timer = null,
    titles = $("ul").getElementsByTagName("li"),
    pics = $("banner").getElementsByTagName("img"),
    len = pics.length;
    //初始状态设置
    titles[0].className="active";
	pics[0].style.display='block';

//封装一个切换的tab函数    
function tab(){
	//鼠标滑过是清除定时器
	$("main").onmouseover=function(){
		if(timer) {clearInterval(timer);}
	}
	//鼠标滑出时继续自动切换
	$("main").onmouseout=function(){timer = setInterval(autoPlay,1000);}

	//遍历li，点击li时跳转到相应页面，并且li样式随之改变
	for(var i=0;i<len;i++){
		titles[i].id=i;		
		titles[i].onclick=function(){
			clearInterval(timer);
			changeOption(this.id);
		}
		$("main").onmouseout=function(){
           		timer = setInterval(autoPlay,1000);
		}
	}

	if(timer){
		clearInterval(timer);
		timer=null;
	}
		//添加定时器，实现每隔一秒自动切换
		timer = setInterval(autoPlay,1000);


//封装autoPlay自动切换函数
		function autoPlay(){
			index++;
			if(index >= len){
				index = 0;
			}
          changeOption(index);
		}
//封装changeOption函数
    function changeOption(curIndex){
    		for (var j=0;j<len;j++) {
			titles[j].className='';
			pics[j].style.display='none';
		}
		titles[curIndex].className="active";
		pics[curIndex].style.display='block';
		index=curIndex;
    }
}
tab();

}
