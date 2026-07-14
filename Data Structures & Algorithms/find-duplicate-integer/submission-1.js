class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Revision Brute Force using hashset
        let set = new Set();

        for (let i = 0; i < nums.length; i++) {
            // check if the set has the value or not if yes then return the value
            if (set.has(nums[i])) return nums[i];
            // if not then add the value to the set
            set.add(nums[i]);
        }
    }
}
