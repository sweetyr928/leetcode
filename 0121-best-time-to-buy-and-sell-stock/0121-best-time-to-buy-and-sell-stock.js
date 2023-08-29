/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let maxProfit = 0;

    for(let i=prices.length-1;i>=0;i--){
        if(prices[i] > max){
            let bigger = false;
            for(let j=i-1;j>=0;j--){
                if(prices[j] < prices[i]){
                    bigger = true;
                    break;
                }
            }
            if(bigger) max = prices[i];
        }else{
            if(max - prices[i] > 0 && max - prices[i] > maxProfit)
                maxProfit = max - prices[i];
        }
    }

    return maxProfit;
};