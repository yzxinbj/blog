---
title: generator函数
date: 2018-01-22 17:06:59
tags:
categories:
---


## generator 函数
> generator : 发生器，生成器

形式上，Generator函数是一个普通函数，但是有两个特征
一是，function关键字与函数名之间有一个星号
二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）

```javascript
function *generator() {
    yield 1;
    yield* [2,3];
    return 4;
}

var iterator = generator();
iterator.next()   // { value: 1, done: false }
iterator.next()   // { value: 2, done: false }
iterator.next()   // { value: 3, done: false }
iterator.next()   // { value: 4, done: false }
iterator.next()   // { value: undefined, done: true }

```
yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口

调用 Generator 函数，该函数并不执行，而是返回一个遍历器对象（Iterator Object）

## 那什么是遍历器对象？
<!--more-->
> 遍历器对象：一个可以被 `for of`循环 和 `...` 解构的对象的`[Symbol.iterator]()`的返回值
> 此对象内包含一个`next`函数，通过一遍一遍的调用此函数可以控制遍历的过程
> 调用`next`函数会返回此对象的每个属性值`value` 和 是否便利到了最后一个属性 `done`--> {value: 11010, done: false}

```javascript
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      },
      return() {
          return { done: true };
      }
    };
  }
};
console.log([...obj]);// [ 'hello', 'world' ]

for (var key of obj){
    console.log(key);
}
// hello 
// world


/**
* 上面和下面两种写法的共同点就是
* 当[Symbol.iterator]() 函数被调用都会返回一个遍历器对象
* 
* 那现在就可以理解为，利用[Symbol.iterator]() 函数，我们可以控制遍历的顺序
* 而利用 generator 函数配合使用可以更简单方便的控制每一次遍历的值和顺序，直观清晰的知道每一次遍历的是哪个值，顺序是怎样
*/


let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
}
[...myIterable] // [1, 2, 3]

// 或者采用下面的简洁写法

let obj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of obj) {
  console.log(x);
}
// "hello"
// "world"
```
