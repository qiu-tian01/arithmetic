/**
 * 
 *  字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

    案例:

    s = "leetcode"
    返回 0.

    s = "loveleetcode",
    返回 2.
 * 
*/

var firstUniqChar = function(s) {
    if(s === '' || s.length < 1){
        return -1;
    }
    let set = new Set();
    for(let i = 0;i<s.length;i++){
        //includes(s[i],i+1)判断i+1后有无相同元素
        //set.has(s[i])判断之前有无相同元素
        if(!s.includes(s[i],i+1) && set.has(s[i])){
            return i;
        }else{
            set.add(s[i])
        }
    }
    return -1;
};