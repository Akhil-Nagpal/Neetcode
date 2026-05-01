class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // Brute Force

        let maxWater = 0;

        for (let i = 0; i < height.length; i++) {
            // find Left max
            let leftMax = 0;
            for (let j = 0; j <= i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            let rightMax = 0;
            // find right max
            for(let j = i; j < height.length; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            let water = Math.min(leftMax, rightMax) - height[i];

            maxWater += water;
        }
        return maxWater;

    }
}
