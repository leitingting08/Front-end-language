## 函数式编程与 JS 异步编程、手写 Promise

### 一、谈谈你是如何理解 JS 异步编程的，EventLoop、消息队列都是做什么的，什么是宏任务，什么是微任务？

JS 是单线程，单线程就意味着，所有任务都需要排队，前一个任务结束，才会执行后一个任务。
js 里的任务分为两种：同步任务（synchronous）和异步任务（asynchronous）。
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。
异步是指不进入主线程，而进入消息队列的任务，只有消息队列通知主线程某个任务可以执行了，该任务才会进入主线程执行。

EventLoop 是 JS 的运行机制，异步任务会放进消息队列，待主线程空闲了再从消息队列中移出到主线程中执行。
宏任务包括：setTimeout、setInterval、setImmediate、I/O、UI rendering
微任务包括：promise.then、process.nextTick（node）、MutationObserver
JS 任务分为宏任务和微任务，宏任务按顺序执行，且浏览器在每个宏任务之间渲染页面。
微任务通常来说就是需要在当前 task 执行结束后立即执行的任务，比如对一系列动作做出反馈，或或者是需要异步的执行任务而又不需要分配一个新的 task，这样便可以减小一点性能的开销。只要执行栈中没有其他的 js 代码正在执行且每个宏任务执行完，微任务队列会立即执行。如果在微任务执行期间微任务队列加入了新的微任务，会将新的微任务加入队列尾部，之后也会被执行。

### 一、将下面异步代码使用 Promise 方法改进

```
setTimeout(function () {
  var a = 'hello'
  setTimeout(function () {
    var b = 'lagou'
    setTimeout(function () {
      var c = 'I love U'
      console.log(a+b+c)
    },10)
  },10)
},10)
```

改进后

```
new Promise((resolve) => {resolve('hello') }).then(res=>return res + 'lagou').then(res=>return res + 'I love U').then(res=>console.log(res))
```

### 二、基于以下代码完成下面四个练习

```
const fp = require('lodash/fp)
// 数据
// horsepower 马力 dollar_value 价格，in_stock 库存
const cars = [
  { name: 'Ferrari FF', horsepower: 600, dollar_value: 70000, in_stock: true },
  { name: 'Spyker', horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 13200, in_stock: false },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: 'Aston Martin One-77', horsepower: 750, dollar_value: 185000, in_stock: true },
  { name: 'Pagani Huayra', horsepower: 700, dollar_value: 130000, in_stock: false }
]
```

#### 练习 1：使用组合函数 fp.flowRight() 重新实现下面这个函数

```
let isLastInStock = function(cars) {
  // 获取最后一条数据
  let last_car = fp.last(cars)
  // 获取最后一条数据的 in_stock 属性值
  return fp.prop('in_stock', last_car)
}
```

改写后

```
const fp = require('lodash/fp')
const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
```

#### 练习 2：使用 fp.flowRight()、fp.prop()和 fp.first()获取第一个 car 的 name

```
let first_name = fp.flowRight(fp.prop('name'), fp.first)
```

#### 练习 3：使用帮助函数\_average 重构 averageDollarValue，使用函数组合方式实现

```
let _average = function(xs){
    return fp.reduce(fp.add,0,xs)/xs.length
}
let averageDollarValue = function(cars){
    let dollar_values = fp.map((cars)=>{
        return cars.dollar_value
    },cars)
    return _average(dollar_values)
}
const total = cars => fp.map(cars=>cars.dollar_value, cars)
const fn = fp.flowRight(_average,total);
console.log(fn(cars));
```

#### 练习 4：使用 flowRight 写一个 sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的 name 转换成这种形式。

```
let _underscore = fp.replace(/\W+/g,'_');
const sanitizeNames = fp.flowRight(fp.map(_underscore),fp.map(fp.toLower),fp.map(car=>car.name))
console.log(sanitizeNames(cars))
```

### 基于以下代码完成练习题

```
// support.js
class Container {
	static of(value) {
		return new Container(value)
	}
	constructor(value) {
		this._value = value
	}
	map(fn) {
		return Container.of(fn(this._value))
	}
}
class Maybe {
	static of(x) {
		return new Maybe(x)
	}
	isNothing() {
		return this._value === null || this._value === undefined
	}
	constructor(x) {
		this._value = x
	}
	map(fn) {
		return this.isNothing() ? this : Maybe.of(fn(this._value))
	}
}
module.exports = { Container, Maybe }
```

#### 练习 1：使用 fp.add(x, y) 和 fp.map(f, x) 创建一个能让 functor 里的值增加的函数 ex1

```
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let maybe = Maybe.of([5, 6, 1])
let ex1 = maybe.map(x=>fp.map(fp.add(1), x))
```

#### 练习 2：实现一个 ex2 函数，能够使用 fp.first 获取列表的第一个元素

```
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = xs.map(x=>fp.first(x))
console.log(ex2)
```

#### 练习 3：实现一个函数 ex3，使用 safeProp 和 fp.first 找到 user 的名字的首字母

```
let safeProp = fp.curry(function (x, o) {
	return Maybe.of(o[x]);
})
let user = { id: 2, name: 'Albert' }
let ex3 = fp.flowRight(fp.map(fp.first), safeProp('name'));
console.log(ex3(user))
```

#### 练习 4：使用 Maybe 重写 ex4，不要有 if 语句

```
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let ex4 = fp.flowRight(fp.map(parseInt), Maybe.of);
let n = 6
ex4(n)
```

### 四、手写 MyPromise 源码

```
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor (executor) {
    // 执行器
    executor(this.resolve, this.reject)
  }
  // 初始状态 pending
  status = PENDING
  // 成功后的返回值
  value = undefined
  // 失败的原因
  reason = undefined
  // 成功回调
  successCallback = []
  // 失败回调
  failCallback = []
  resolve = value => {
    if(status !== PENDING) return;
    this.statsus = FULLFILLED
    this.value = value
    // this.successCallback && this.successCallback
    while (this.successCallback.length) {
        this.successCallback.shift()()
    }
  }
  reject = reason => {
    if(status !== PENDING) return;
    this.statsus = REJECTED
    this.reason = reason
    // this.failCallback && this.failCallback
    while (this.failCallback.length) {
        this.failCallback.shift()()
    }
  }
  then(successCallback, failCallback) {
    successCallback = successCallback ? successCallback : value => value;
    failCallback = failCallback ? failCallback : error => { throw error }
    let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallback(this.err)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }else {
                //等待
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.err)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                });
            }
        })
        return promise2
  }
  catch(cb){
        return this.then(undefined,cb)
    }
    finally(cb) {
        return this.then(value => {
            return MyPromise.resolve(cb()).then(() => value);
        }, err => {
            return MyPromise.resolve(cb()).then(() => { throw err })
        })
    }
    static all(arr) {
        let result = [];
        let index = 0;

        return new MyPromise((resolve, reject) => {
            function addData(key, value) {
                result[key] = value;
                index++;
                if (index === arr.length) {
                    resolve(result)
                }
            }
            for (let i = 0; i < arr.length; i++) {
                let current = arr[i];
                if (current instanceof MyPromise) {
                    current.then(value => addData(i, value), err => reject(err))
                } else {
                    addData(i, arr[i])
                }
            }

        })
    }
    static resolve(value) {
        if (value instanceof MyPromise) {
            return value
        } else {
            return new MyPromise((resolve) => resolve(value))
        }
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('重复引用了'))
    }
    if (x instanceof MyPromise) {
        // x.then(value=>resolve(value),err=>reject(err))
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}
```
