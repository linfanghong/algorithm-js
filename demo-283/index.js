/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let frontpos = 0
  let backpos = 0
  while(backpos < nums.length){
      if(nums[backpos] === 0){
          backpos++
      }
      else {
          nums[frontpos++] = nums[backpos++]
      }
  }
  for(let i = frontpos; i < nums.length; i++){
      nums[i] = 0
  }
  return nums
};

// 时间复杂度O(n)