
// 原生写ajax
//四个参数：传输的方式，路径，数据，回调函数
function ajax(method,url,data,callback){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
	   xhr = new ActiveXObject("Mircrosoft.XMLHTTP"); // IE6
	} 
	if(method=='GET' && data){ // 如果是get请求，并且有data：传数据到服务器
		url = url + '?' + data
	}
	xhr.open(method,url, true)
	if(method=='GET'){
		xhr.send(null);
	}else{
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencode');
		xhr.send(data)
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){ // 成功的回调
				callback(xhr.responseText);
			}else{
				console.log('错误'+xhr.status); // 错误状态码
			}
		}
	}
}
