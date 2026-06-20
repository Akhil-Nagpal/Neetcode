class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // Optmised Code using deque
        // deque have some rules -
        // it removes values from both ends
        // it stores the biggest value on the left and smallest on the right

        let result = [];
        let deque = [];
        let left = 0; 
        let right = 0;

        // now iteratre until current element hit the array limit
        while (right < nums.length) {
            // check every time if the deque is empty or not and does deque last element is smaller then current element, if both are yes then remove the lat element from the back of deque
            while (deque.length && nums[deque.at(-1)] < nums[right]) {
                deque.pop();
            }
            // if false then add the current element to the deque
            deque.push(right);
            // check if the left side of the deque is expired 
            while (deque[0] < left) {
                deque.shift();
            }
            let winLength = right - left + 1;
            if (winLength === k) {
                result.push(nums[deque[0]]);
                left++;
            }
            right++
        }
        return result;

    }
}
