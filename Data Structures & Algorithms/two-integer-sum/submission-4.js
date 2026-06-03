class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Revision optimisation using Hash Map
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let needed = target - nums[i];

            if (map.has(needed)) {
                return [map.get(needed), i]
            }
            map.set(nums[i], i)
        }
    }
}
