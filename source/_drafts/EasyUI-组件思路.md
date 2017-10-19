---
title: EasyUI 组件思路
date: 2017-09-12 17:53:10
tags: js
categories: 编程
---

### 首先
`$` 是一个函数
```javascript
$.__proto__ === Function.prototype    // true
```
`$.fn` 即 `$` 的原型，下面两行均能证明
```javascript
$.fn === $.prototype       // true
$.fn === $().__proto__     // true
```

所以可以把$看成

```javascript
function $(){
    
}

$.prototype = $.fn = {
    
}

```

所以可以看到一些 jquery 的插件都是这样
```javascript
// 扩充 $.fn 
$.extend($.fn, {
    
});
```



