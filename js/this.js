window.onload=function(){
var val = 'lisi'

var obj = {
	val:'zhangsan',
	fn1:function(){
		console.log(this.val);//this指向obj
	},
	fn2:()=> {
		var val = 'wangwu'
		console.log(this.val);//this指向window
	},
	fn3:()=>{
		var val = '888'
		return this.val//this指向window
	}
}

obj.fn1()//zhangsan
obj.fn2()//lisi
console.log(obj.fn3())//lisi

}