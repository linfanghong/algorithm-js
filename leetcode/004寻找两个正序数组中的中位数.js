// 题目链接：https://leetcode.cn/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let nums3 = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while(m>0 && n>0){
      if(nums1[i] <= nums2[j]) {
          nums3[k] = nums1[i];
          m--;
          i++;
          k++;
      }
      else {
          nums3[k] = nums2[j];
          n--;
          j++;
          k++;
      }
  }
  if(m) {
      nums3 = nums3.concat(nums1.slice(i));
      m = 0;
  }
  if(n) {
      nums3 = nums3.concat(nums2.slice(j));
      n = 0;
  }
  m = nums1.length;
  n = nums2.length;
  return (m+n)%2 === 1 ? nums3[Math.ceil((m+n)/2)-1] : (nums3[(m+n)/2-1]+nums3[(m+n)/2])/2
};