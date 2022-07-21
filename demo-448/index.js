/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  let result = []
  let n = nums.length
  for(item of nums) {
      nums[(item - 1) % n] += n
  }
  for(let i=0; i<nums.length; i++){
      if(nums[i] <= n) {
          result.push(i+1)
      }
  }
  return result
};