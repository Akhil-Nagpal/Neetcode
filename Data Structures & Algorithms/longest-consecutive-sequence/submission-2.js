class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        // Brute Force
        // Edge Case - if the nums.length is 0 then return 0
       

        let longest = 0;
        let count = 1;

        let sortedNums = nums.sort((a, b) => a - b); // sorted in acesding order


        for (let i = 1; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i - 1]) continue;
            
            if (sortedNums[i] === sortedNums[i - 1] + 1) {
                count++;
            } else {
                // This step update when consecutive chain breaks
                longest = Math.max(longest, count);
                count = 1;
            }
        }
        // This step update the longest when the array hit it's length
        longest = Math.max(longest, count);
        return longest;
    }
}
