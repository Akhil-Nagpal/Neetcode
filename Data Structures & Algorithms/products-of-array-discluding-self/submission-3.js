class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Revision optimisation using Prefix/Suffix
        let left = []
        let productL = 1;

        for (let i = 0; i < nums.length; i++) {
            left[i] = productL
            productL *= nums[i]
        }

        let right = [];
        let productR = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = productR
            productR *= nums[i];
        }

        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(left[i] * right[i]);
        }
        return result;

    }
}
