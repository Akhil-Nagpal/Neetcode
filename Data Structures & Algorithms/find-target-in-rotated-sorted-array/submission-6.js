class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Revision

        // Brute Force 
        for (let i = 0; i < nums.target; i++) {
            if (nums[i] === target) return i;
        }
        return -1;
    }
}
