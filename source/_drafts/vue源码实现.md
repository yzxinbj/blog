---
title: vue源码实现
tags: vue js
categories: 编程
---

```
// 数据劫持就是所有对象全部通过 definProperty 定义，利用 get, set 函数

function MyVue(options = {}){
    this.$options = options;
    // this._data
    var data = this._data = this.$options.data;
    
    observe(data);
}


function Observe(data){
    for(let key in data){
        Object.define
    }
}

// 观察对象，给对象增加Object.defineProperty
function observe(data){
    return new Observe(data);
}
```
