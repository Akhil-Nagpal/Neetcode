class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Revision
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
