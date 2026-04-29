class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Brute Force

        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let area = (j - i) * Math.min(heights[i], heights[j]);
                maxArea = Math.max(area, maxArea);
            }
        }
        return maxArea;
    }
}
