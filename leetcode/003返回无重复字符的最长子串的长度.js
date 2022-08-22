// 题目链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/


/**
 * 暴力解法：
 *  1. 嵌套两层循环遍历，判断s.slice(i, j+1)是否有重复字符
 *  2. 判断字符串是否有重复字符使用Set
 */
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
  // 加一个判断是应对特殊用例 ' ' 或 'a' 或 '';
  // 此时循环中没有走if判断，maxLength数组中无元素
  if(maxLength.length > 0) return Math.max(...maxLength)
  else return s.length
};

/**
 * 滑动窗口/双指针解法
 *  1. 使用左指针left和右指针right来标识最长无重复字符子串
 *  2. 若右指针对应字符重复，则左指针右移
 *  3. 右指针走到最后一位，需要将结果push进来
 *  4. 特殊的用例 如''需要做特殊处理
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let right = 1;
    let chars = new Set();
    chars.add(s[0]);
    let resultList = [];
    for(let left=0; left<s.length&&right<s.length; ){
        if(chars.has(s[right])) {
            resultList.push(right - left);
            chars.delete(s[left]);
            left++;
        }
        else {
            chars.add(s[right])
            if(right === s.length-1){
                resultList.push(right-left+1);
            }
            else {
                right++;
            }
        }
    }
    return resultList.length ? Math.max(...resultList) : s.length;
};