// 题目链接：https://leetcode.cn/problems/zigzag-conversion/

/**
 * 解题思路
 *  1. 建立一个二维数组，里面包含有numRows个数组
 *  2. 从左到右遍历数组s
 *    1. 第一个遍历 从0 -> numRows
 *    2. 第二个遍历 从numRows-1 -> 1
 *  3. 将二维数组内部的数组进行拼接
 *  特殊情况 n=1
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if(numRows === 1) {
      return s;
  }
  let zArr = [];
  let n = numRows;
  while(n--) {
      zArr.push([]);
  }
  for(let i=0; i<s.length; i++){
      if(i%(numRows*2-2) < numRows) {
          zArr[i%(numRows*2-2)].push(s[i]);
      }
      else {
          zArr[numRows*2-2 - i%(numRows*2-2)].push(s[i]);
      }
  }
  let result = [];
  for(let item of zArr){
      result = result.concat(item);
  }
  return result.join('');
};