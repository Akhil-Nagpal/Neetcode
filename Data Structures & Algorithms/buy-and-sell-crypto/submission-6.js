class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Optimised solution 
        // track the profit 
        let profit = 0;
        // start from the prices and also track is the current is minimum or not 
        let min = prices[0] // it satrting from prices[0]

        // itrate through every prices
        for (let i = 0; i < prices.length; i++) {
            // check if the current ith value is the minimum or not 
            min = Math.min(min, prices[i]);
            // calculate the profit 
            let currentProfit = prices[i] - min;
            // check if the currentProfit is greater than profit and update profit if yes
            profit = Math.max(profit, currentProfit); 
        }
        return profit;
    }
}
