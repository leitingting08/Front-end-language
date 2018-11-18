// js实现parseInt
function parseInt(str, radix){
	//如果不是string或number类型返回NaN
	if(typeof str!=='string'||typeof str!=='number'){ 
		return NaN;
	}
	
	// 如果是空字符串返回NaN
	if(!str.length){
		return NaN;
	}
	
	if(!radix){
		// 如果radix为0 null undefind 则转化为10
		radix = 10;
	}
	if(typeof radix!==number||radix<2||radix>36){
		return NaN;
	}
	let result = 0;
	str = String(str).trim().split('.')[0]
	for (let i = 0;i<str.length;i++){
		let arr = str.split('').reverse().join('');
		result += Math.floor(arr[i])*Math.pow(radix,i)
	}
	return result;
}