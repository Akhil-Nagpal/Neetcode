class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Revision optimisation using Hashset
        let set = new Set(nums);

        let longest = 0;

        for (let num of set) {
            if (!set.has(num - 1)) {

                let value = num;
                let count = 1;

                while(set.has(value + count)) {
                    count++;
                }
                longest = Math.max(count, longest);
            }
        }
        return longest;
    }
}
