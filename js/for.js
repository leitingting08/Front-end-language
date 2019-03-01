var arr = ['aa','bb']
var obj = {a:'cc',b:'dd'}
for(key in arr){console.log(key)} // 0,1
for(key in obj){console.log(key)} // a,b
for(value of arr){console.log(value)} // aa,bb
for(value of obj){console.log(value)} // 报错：obj is not iterable 对象不可用for of迭代