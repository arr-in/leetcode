/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = [];
    let ans = [];
    for(let i = prices.length-1 ; i >= 0 ; i--){
        while(stack.length > 0 && stack[stack.length-1] > prices[i]){
            stack.pop();
        }
        if(stack.length === 0){
            ans[i] = prices[i];
        }else{
            ans[i] = prices[i] - stack[stack.length-1];
        }
        stack.push(prices[i]);
    }
    return ans;
};