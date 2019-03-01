function deepCopy(obj){
	var a = obj instanceof Array?[]:{} // 判断传入的参数是数组还是对象
	for(var key in obj){
		if(obj.hasOwnProperty(key)){ // 判断是不是自身属性
			if(obj[key]&&typeof obj[key]==='object'){ // 判断是不是引用类型，如果是引用类型递归复制所有属性
				a[key]=deepCopy(obj[key]);
			}else{
				a[key]=obj[key];
			}
		}
	}
}

var a={s:1}
var b=deepCopy(a)
b.s=2
console.log(a===b) // false