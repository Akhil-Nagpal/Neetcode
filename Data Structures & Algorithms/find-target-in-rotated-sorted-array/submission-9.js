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
            // check if the left side is sorted from middle
            if (nums[left] <= nums[mid]) {
                // check if the target is between left side till mid, if yes then move right to mid
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // check if the target is between mid and right, if yes then move left till mid
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;

    }
}
