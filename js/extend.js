function extend(){
	var len = arguments.length;
	var target = arguments[0]||{};
	if(typeof target!='object' && typeof target!='function'){
		target = {};
	}
	if(len==1){
		target = this;
		i--;
	}
	// hasOwnProperty判断对象是否包含特定的自身（非继承）属性
	for(var i=1;i<len;i++){
		var source = arguments[i];
		for(var key in source){
			if(Object.prototype.hasOwnProperty.call(source,key)){
				target[key] = source[key]
			}
		}
	}
	return target;
}