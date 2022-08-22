// 题目链接：https://leetcode.cn/problems/reverse-integer/


/**
 * 解题思路
 * 1. 数字转换为字符串，字符出再根据符号进行反转
 * 2. 转换为数字，进行简单判断
 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let s = x.toString()
  if(s[0] === '-') {
      s = s[0] + s.slice(1).split('').reverse().join('');
  }
  else {
      s = s.split('').reverse().join('');
  }
  result = +(s)
  return result<-Math.pow(2, 31) || result>Math.pow(2, 31)-1 ? 0 : result;
};