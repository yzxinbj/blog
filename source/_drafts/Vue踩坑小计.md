---
title: Vue踩坑小计
tags:
categories:
---
## 注意组件里写了 model 也需要些 props

```javascript
  model: {
    prop: 'default_items',
    event: 'change'
  },
  props: ['default_items']
```


## Error compiling template:
template 外层不能有两个根元素

错误写法
```html
<div id="component">
  <div></div>
  <button></button>
</div>

```

正确写法
```html
<div id="compontent">
  <div>
    <content></content>
    <button></button>
  </div>
</div>
```