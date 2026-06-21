class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Revision - Optimising Code using Binary search
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            // get the middle of the array 
            let mid = Math.floor((left + right) / 2);

            // check if the middle is equals to target
            if (nums[mid] === target) return mid;

            // if not then check if the target is greater than mid, move left to mid
            if (target > nums[mid]) left = mid + 1;

            // if not then check if the target is smaller than mid, move right to mid
            if (target < nums[mid]) right = mid - 1;
        }
        return -1;
    }
}
