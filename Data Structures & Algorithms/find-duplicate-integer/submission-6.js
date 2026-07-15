class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Optimised code using Fast and slow pointers 
        // Phase 1 - detect the cycle first 
        // start the pointers from 0
        let slow = nums[0];
        let fast = nums[0];

        // first move bpoth pointers once
        slow = nums[slow];
        fast = nums[nums[fast]];

        // iterate until slow and fast didnt match
        while (slow !== fast) {
            // move pointers forward 
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        // Phase 2 - detect where the cycle starts if duplicate found that's the start
        // set slow to 0 again
        slow = nums[0];

        // In this loop slow starts from 0 and move until it reaches fast untill then move both pointers by 1
        while (slow !== fast) {
            // move pointers forward 
            slow = nums[slow];
            fast = nums[fast];
        }
        // when slow reaches the fast that the entry point
        return slow;

    }
}
