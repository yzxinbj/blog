---
title: reduce-polyfill
date: 2018-06-12 15:07:24
tags:
categories:
---

```ecmascript 6
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' + 
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      var o = Object(this);
        
      // >>> 无符号右移，作用非负数取整
      var len = o.length >>> 0; 

      var k = 0; 
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        /**
         *  当没有给初始值时
         *  下面这是为了解决 Array.prototype.reduce.call({ 2:234, 4: 456,length:8}, function(){})
         *  注意必须传 length
         *  解决这种调用，可以直接从 2 开始
         */
        while (k < len && !(k in o)) {
          k++; 
        }

        if (k >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      while (k < len) {
        // 此处同样是为了解决上面写的 call 调用的方式 
        // 先判断 k 是否在 o 里
        // 不加判断，比如求和的时候就会出现 undefined + 1 = NaN
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        k++;
      }

      return value;
    }
  });
}
```
