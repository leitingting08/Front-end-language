// 创建对象的三种方式
// 第一种方式：字面量
var o1 = {name:'o1'}
var o2 = new Object({name:'o2'})
// 第二种方式：构造函数
var M = function(name){this.name = name};
var o3 = new M('o3')
// 第三种方式：object.create
var p = {name:'p'}
var o4 = Object.create(p)