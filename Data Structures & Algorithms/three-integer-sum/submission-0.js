class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Brute Force
        
        let set = new Set();
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let triplet = [nums[i], nums[j], nums[k]];
                        triplet.sort((a, b) => a - b);
                        set.add(triplet.join(","));
                    }
                    
                }
            }
        }
        
        for (let item of set) {
            result.push(item.split(",").map((item) => Number(item)));
        }

        return result;

    }
}
