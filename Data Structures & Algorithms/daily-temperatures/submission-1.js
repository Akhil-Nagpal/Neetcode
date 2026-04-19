class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Optimised Code 

        let n = temperatures.length
        let result = new Array(n).fill(0);

        let stack = [];

        for (let i = 0; i < n; i++) {
            while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                let prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return result;
    }
}
