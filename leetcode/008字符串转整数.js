// 题目链接：https://leetcode.cn/problems/string-to-integer-atoi/submissions/

/**
 * 几个特殊用例
 *  1. '123-' '-+123'
 */
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let flag = false;
  let flag2 = false;
  let str = '';
  for(let item of s) {
      if(item === ' '){
          if(!flag) {
              continue;
          }
          else {
              break;
          }
      }
      else if(item === '-' || item === '+') {
          if(flag2) {
              break;
          }
          flag = true;
          flag2 = true;
          str += item;
      }
      else if(item <= '9' && item>= '0'){
          flag = true;
          flag2 = true;
          str += item;
      }
      else {
          break;
      }
  }
  if(isNaN(+str)) {
      return 0;
  }
  return +str<-Math.pow(2, 31) ? -Math.pow(2, 31) : 
  (+str>Math.pow(2, 31)-1  ? Math.pow(2, 31)-1 : +str);
};