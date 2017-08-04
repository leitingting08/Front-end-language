$(document).ready(function(){
    $.ajax({
      url:"data.json",
      type:"GET",
      dataType:"json",
      error: function(error){alert(error)},
      success: function(data){
          console.log(data)
          var row1=data.row1;
          var row2=data.row2;
          var row3=data.row3;
          pushData(row1,".ul1");
          pushData(row2,".ul2");
          pushData(row3,".ul3");

          function pushData(row,obj){
            $.each(row,function(index,item){
                var $li=$('<li></li>');
                var $img=$('<img src="'+item.img+'"/>');
                var $info=$('<p class="info"><span>转转</span>'+item.info+'</p>')
                var $seller=$('<p class="seller"><img src="'+item.pic+'"/>'+item.seller+'</p>');
                var $price=$('<p class="price">'+item.price+'</p>');
                $li.append($img,$info,$seller,$price);
                $(obj).append($li)
            });
          }
		           }
});	
});	
