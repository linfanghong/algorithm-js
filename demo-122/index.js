/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let sum = 0
  // 标识当前是否购入了股票
  let flag = false
  let buyDay = 0
  let sellDay = 0
  for(let i = 0; i<prices.length; i++){
      // 当前没有购入股票时
      if(!flag) {
          if(prices[i] >= prices[i+1]) {
              continue
          }else{
              buyDay = i
              flag = true
          }
      }else {
          if(prices[i] <= prices[i+1]) {
              continue
          }else {
              sellDay = i
              flag = false
              sum += (prices[sellDay] - prices[buyDay])
          }
      }
  }
  return sum
};