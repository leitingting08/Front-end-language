
$(document).ready(function(){
	//手机号码验证
	$(document).on('blur','[name=phonenumber]',function(){
		var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/; 
		var phonenumber = $('[name=phonenumber]').val().trim(); 
		if(!reg.test(phonenumber)){
			$('.error').show();
			$('.indentify_code').removeClass('bg_blue');
		    return false;
		}else{
			$('.error').hide();
			$('.indentify_code').addClass('bg_blue');
			return true;
		}     
	});

	//发送验证码
	$('.indentify_code').click(function(){
		if($(this).hasClass('bg_blue')){
			setTime($(this));
		}
	})
    //验证码倒计时
	function setTime(obj){
       var count = 60;
       var timer = setInterval(function(){
       	count--;
       if(count<=0){
       	obj.addClass('bg_blue');
       	obj.attr('disabled',false);
       	obj.val('重新发送');
       	clearInterval(timer);
       	return false;
       }else{
       	obj.removeClass('bg_blue');
       	obj.attr('disabled',true);
        obj.val( count + "s");
       } 
     },1000)
	}

    var verify = $('[name=verify]').val().trim();
    var phonenumber = $('[name=phonenumber]').val().trim();
    $('[name=verify]').blur(function(){
       if(verify==''){
       		if(!phonenumber){
       			$('.see_bill').addClass('bg_blue');
       		}
       }
    })

    //查看账单--无数据
    $('.see_bill').click(function(){
    	if($(this).hasClass('bg_blue')){
	    	$('.mask').show();
	    	$('.close_icon').click(function(){
	    		$('.mask').hide();
	    	})
        }
    })



})