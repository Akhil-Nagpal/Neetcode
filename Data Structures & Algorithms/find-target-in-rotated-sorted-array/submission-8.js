class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Revision
        // Optimised Code using Binary Search
        
        let left = 0; 
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) return mid;

            // now first check which side is the sorted 
        }


    }
}
