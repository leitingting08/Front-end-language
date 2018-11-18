// 原型链继承的例子(封装dom查询的例子)

function Elem(id){
	var this.elem = document.getElementById(id)
}

Elem.prototype.html = function(val){
	var elem = this.elem;
	if(val){
		elem.innerHTML = val;
		return this;
	}else{
		return elem.innerHTML
	}
}

Elem.prototype.on = function(type,fn){
	var elem = this.elem;
	elem.addEventLister(type,fn)
}

var div1 = new Elem('div1')
// 支持链式操作
div1.html('<div>改变了文字</div>').on('click',function(){
	alert(0)
}).html('<p>javascript</p>')