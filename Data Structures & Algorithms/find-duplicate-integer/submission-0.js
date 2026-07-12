class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Brute Force using hashset

        let set = new Set();

        for (let i = 0; i < nums.length; i++) {
            // check if the value is in the set 
            if (set.has(nums[i])) {
                return nums[i]; 
            }

            set.add(nums[i]);
        }
    }
}
