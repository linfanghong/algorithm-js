/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let miniprice = prices[0]
  let maxprofit = 0
  for(let i = 0; i < prices.length; i++){
      if(prices[i] < miniprice){
          miniprice = prices[i]
      }else if(prices[i] - miniprice > maxprofit) {
          maxprofit = prices[i] - miniprice
      }
  }
  return maxprofit
};