class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // Brute Force 
        let profit = 0;

        for (let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                let currentProfit = prices[i] - prices[j];

                profit = Math.max(profit, currentProfit);
            }
        }
        return profit;
    }
}
