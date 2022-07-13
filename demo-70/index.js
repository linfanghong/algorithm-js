/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n===1) return 1
    if(n===2) return 2
    if(n>=3) return climbStairs(n-1) + climbStairs(n-2)
};
// 这种解法会超时 算法复杂度为O(2^n)

/**
 * @param {number} n
 * @return {number}
 */
 const store = [1, 2]
 var climbStairs = function(n) {
     if(store[n-1] !== undefined) return store[n-1]
     if(n>=3) {
         store[n-1] = climbStairs(n-1) + climbStairs(n-2)
         return store[n-1]
     }
 };
 // 这里复杂度会降低到O(n)