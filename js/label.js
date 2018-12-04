// js中的label语句 例子
// 添加label的作用：在嵌套循环中熟练应用break,continue

// 未添加label
var num = 0;
for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
			break;
		}
		num++;
	}
}

alert(num) // break跳出了内层j循环但还会执行外层i循环,输出95

// 添加label
var num = 0;
stop:for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
			break stop;
		}
		num++;
	}
}

alert(num) // 循环在i=5 j=5的时候跳出双循环，输出55

// continue
var num = 0;
stop:for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
			continue stop;
		}
		num++;
	}
}

alert(num)//95  continue outPoint;语句的作用是跳出当前循环，并跳转到outPoint（标签）下的for循环继续执行。
