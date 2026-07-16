class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Revision optimised Code 
        // This problerm will be solved in 2 phases 
        // Phase 1 - 
        // initialize 2 pointers 
        let slow = nums[0];
        let fast = nums[0];

        // iterate until the slow is not equal to fast 
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        // Phase 2 - 
        // now we detect if the array is cyclic or not
        // find the duplicate cause thats the entry point
        // set slow to the start
        slow = nums[0];

        // iterate until both isn't equal
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        // return the slow cause if both meet that means slow and fast are equal that means slow is the duplicate
        return slow;

    }
}
