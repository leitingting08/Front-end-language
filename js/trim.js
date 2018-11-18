// js原型扩展trim方法
String.prototype.trim = function() {
	return this.replace("/(^s*)|(\s*$))/g",'')
};