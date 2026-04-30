class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Optimised Approach using Two pointers

        let maxArea = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);

            maxArea = Math.max(area, maxArea);
           
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea
    }
}
