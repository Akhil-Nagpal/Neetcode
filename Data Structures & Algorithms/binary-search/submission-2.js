class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Optimised Code using Binary Search

        // start from both ends left and right
        let left = 0;
        let right = nums.length - 1;
        
        // Then run a loop untill left is smaller than right
        while (left <= right) {
            // find the middle of the left pointer and right pointer
            let mid = Math.floor((left + right) / 2);

            // check if the target is same as mid if yes then we got the answer
            if (target === nums[mid]) return mid;
            // chedk if the target is smaller than update right as mid and start again 
            if (target < nums[mid]) {
                right = mid - 1
            }
            // check if the target is bigger then update the left as mid and start again
            if (target > nums[mid]) {
                left = mid + 1;
            }
        }
        return -1;

    }
}
