class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // optimised code 
        let maxProfit = 0;
        let min = prices[0];

        for (let i = 0; i < prices.length; i++) {

            min = Math.min(min, prices[i]);
            let profit = prices[i] - min;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
