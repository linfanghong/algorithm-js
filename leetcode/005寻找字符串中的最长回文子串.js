// 题目链接：https://leetcode.cn/problems/longest-palindromic-substring/

// 暴力解法
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  result = []
  for(let i=0; i<s.length; i++){
      for(let j=s.length; j>i; j--){
          if(s.slice(i,j) === s.slice(i,j).split('').reverse().join('')){
              result.push(s.slice(i,j));
              break;
          }
      }
  }
  let maxString = ""
  for(let item of result){
      if(item.length>maxString.length){
          maxString = item;
      }
  }
  return maxString;
};
// 运行会超时

// 回文串看书后再来看
