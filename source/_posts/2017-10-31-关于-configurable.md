---
title: 关于-defineProperty
date: 2017-10-31 13:58:05
tags: javascript
categories: 编程
---

## Object.defineProperty()
```javascript
var obj = {};

Object.defineProperty(obj, 'key', {
  // 是否可枚举，即能否在 for in 中遍历出来，以及 Object.keys(),JSON.stringify()
  // 但注意！Object.keys JSON.stringify 只会处理对象本身的可枚举属性，
  // 而 for in 会遍历 整个原型链上的可枚举属性
  enumerable: false, 
  writable: false, // 能否修改此值，如直接赋值，或用defineProperty更改
  value: 'static', // 值
  configurable: false // 能否修改前3个属性
});
```
例子如下
<!--more-->

```javascript
// 当 configurable 为 false 时
var obj = {};

Object.defineProperty(obj, 'key', {
  enumerable: false, 
  configurable: false,
  writable: true,
  value: 'static'
});

// 可以执行
Object.defineProperty(obj, 'key', {
  value: 123
});

// 可以执行
Object.defineProperty(obj, 'key', {
  writable: false
});

// 报错
Object.defineProperty(obj, 'key', {
  writable: true
});


// 报错, 因为 writable 被设置成了 false 
Object.defineProperty(obj, 'key', {
  value: 234
});


// 报错
Object.defineProperty(obj, 'key', {
  enumerable: true
});

// 错误信息一致
// Uncaught TypeError: Cannot redefine property: key
//    at Function.defineProperty (<anonymous>)
//    at <anonymous>:1:8


// 详细的自己执行下就知道了
```

结论: configurable 为 false 时，除了能设置 writable 为 false，其他更改描述符的方式均报错
