// 题目链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let maxLength = []
  let maxString = new Set()
  for(let i=0; i<s.length; i++){
      for(let j=i; j<s.length; j++){
          maxString.add(s[j])
          if(maxString.size !== 1+j-i){
              maxLength.push(maxString.size)
              maxString.clear()
              break
          }
      }
  }
  if(maxLength.length > 0) return Math.max(...maxLength)
  else return s.length
};
// 特殊的用例 ' ' 返回 1

// 官方的解法
// 用到了双指针和滑动窗口
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
      if (i != 0) {
          // 左指针向右移动一格，移除一个字符
          occ.delete(s.charAt(i - 1));
      }
      while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
          // 不断地移动右指针
          occ.add(s.charAt(rk + 1));
          ++rk;
      }
      // 第 i 到 rk 个字符是一个极长的无重复字符子串
      ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};