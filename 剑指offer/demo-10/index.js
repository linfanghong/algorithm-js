/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  const MOD = 1000000007;
  let result
  let prePreResult = 0
  let preResult = 1
  for(let i = 0; i <= n; i++){
      if( i < 2 ){
          result = i
      }else{
          result = (preResult + prePreResult) % MOD
          prePreResult = preResult
          preResult = result
      }
  }
  return result
};
// 迭代方式 复杂度O(n)