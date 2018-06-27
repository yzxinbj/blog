function getLongestStr(str) {
    let len = str.length,
        maxLength = 0,
        curLength = 0,
        position = {},
        hashMap = {};

    for (let i = 0; i < len; i++) {
        let curPostion = position[str[i]] === undefined ? -1 : position[str[i]];
        console.log(curPostion);
        /*
         *  如果小于0，即如果不重复 
         *  或者重复但是与重复的距离大于上一个（f(i-1)）子串长，即重复的字符在上一个子串之外
         */
        if (curPostion < 0 || i - curPostion > curLength) {
            curLength++;
        } else {
            /*
             * 如果重复但是，与重复的距离 小于 上一个子串长，证明重复的字符在上一个子串内
             */

            // 因为重复的字符在上一个子串内，所以 curLength 会减小，所以要存下 curLength
            if (curLength > maxLength) {
                maxLength = curLength;
            }

            curLength = i - curPostion;

        }
        
        // 每次循环通过 hashmap （js 中表现为对象） 更新每个字符的位置
        position[str[i]] = i;

        hashMap[i] = curLength;
    }

    if (curLength > maxLength) {
        maxLength = curLength;
    }

    return {
        h: hashMap,
        m: maxLength
    }
}


let o = getLongestStr('arabcacfr');

console.log(o);