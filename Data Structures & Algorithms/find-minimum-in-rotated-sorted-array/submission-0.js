class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Brute Force
        let num = Math.min(...nums)
        return num;
    }
}
