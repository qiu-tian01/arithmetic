/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：

    输入：s = "We are happy."
    输出："We%20are%20happy."
     

    限制：

    0 <= s 的长度 <= 10000

 */

// 方法一：正则
 var replaceSpace = function(s) {
    return s.replace(/ /g,'%20')
  };
// 方法二,split+join
var replaceSpace = function(s) {
    // return s.replace(/ /g,'%20')
    if(typeof s === 'string' && s !== ''){
      return s.split(' ').join('%20')
    }
    else return ''
  };