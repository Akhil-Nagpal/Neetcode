class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let requiredNum = target - nums[i]; // reqiredNum will be 7 - 3 = 4
            // check if the requiredNum is in the map or not
            // if the requiredNum is in map then get the value and the current index 
            // if not set the current value in map

                if (map.has(requiredNum)) {
                    return [map.get(requiredNum), i];
                }
                map.set(nums[i], i);
        } 
        return [-1, -1];
    }
}
