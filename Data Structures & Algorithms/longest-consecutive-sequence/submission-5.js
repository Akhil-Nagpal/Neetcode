class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // Optimised Code using Hashset
        // Intuition - 
        // first store all the nums in a set 
        // for every element check if the element is the sating of consecutive chain, if not continue, if yesincrease the count
        // then after counting all the consecutive elements update the longest with longest and count whichever is higher
        // return longest

        let set = new Set(nums);

        let longest = 0;

       for (let num of set) {

            if (!set.has(num - 1)) {
                let value = num;
                let count = 1;

                while (set.has(value + count)) {
                    count++;
                }
                longest = Math.max(longest, count);
                count = 1;
            }
        }
        return longest;
    }
}
