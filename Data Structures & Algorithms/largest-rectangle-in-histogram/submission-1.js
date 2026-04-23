class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // Brute Force

        // start with area is 0;
        let maxArea = 0;

        // loop through every rectangle
        for (let i = 0; i < heights.length; i++) {
            // get the height of current rectangle
            let currentHeight = heights[i];

            // now move to the left side from current rectangle
            let l = i;

            // iterate throgh all the elements from left until the left hit the boundary and left rectangle is smaller than the current 
            while (l >= 0 && heights[l] >= currentHeight) {
                l--;
            }

            // move to right from crrent rectangle
            let r = i;

            // iterate throgh all the elements from current until the right hit the boundary and right rectangle is smaller than the current 
            while (r < heights.length && heights[r] >= currentHeight ){
                r++;
            }

            // calculate the width 
            let width = r - l - 1;

            // calculate area 
            let area = currentHeight * width;

            maxArea = Math.max(maxArea, area);

        }
        return maxArea;
    } 
}
