/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};
// 这是暴力解法 复杂度为O(n^2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const store = {}
    for(let i = 0; i < nums.length; i++) {
        if(store[nums[i]] !== undefined){
            return [ store[nums[i]], i]
        } else {
            store[target - nums[i]] = i
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const store2 = {}
    for(let i = 0; i < nums.length; i++) {
        if(store2[target - nums[i]] !== undefined){
            return [ store2[target - nums[i]], i]
        } else {
            store2[nums[i]] = i
        }
    }
};
// 这两种方式是对配对的另一个数字进行记录 复杂度为O(1)