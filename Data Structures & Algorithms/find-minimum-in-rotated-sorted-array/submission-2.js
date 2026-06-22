class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Optimised Code using Binary search

        // initiate the pointers 
        let left = 0;
        let right = nums.length - 1;

        // now iterate through the lements and start tracking the pointers
        while (left < right) {
            // calculate the mid 
            let mid = Math.floor((left + right) / 2);

            // check if the middle value is greater than right that means nums are rotated, and then the minimum must be in right side from the middle value
            // In that case move left to the mid
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // if middle value is smaller than right that mean minimum value is in the left then move right to mid but keep the mid without loosing it
                right = mid;
            }
        }
        return nums[left]; // this means if the value is in extreme left side so the loop will end meeting both pointers left and right and right will also have the same value as left, but return left is the convestion
    }
}
