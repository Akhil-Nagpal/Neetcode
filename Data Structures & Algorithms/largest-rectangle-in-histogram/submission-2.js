class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        // Optimised Solution

        let maxArea = 0; 
        let stack = [];

        for (let i = 0; i <= heights.length; i++) {

            let currHeight = (i === heights.length) ? 0 : heights[i];

            while (stack.length && currHeight < heights[stack.at(-1)]){

                let height = heights[stack.pop()];

                let r = i;
                let l = stack.length ? stack.at(-1) : -1;

                let width = r - l - 1;
                let area = height * width;

                maxArea = Math.max(area, maxArea);
            } 
            stack.push(i);
        }
        return maxArea;
    }
}
