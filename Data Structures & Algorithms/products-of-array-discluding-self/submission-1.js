class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Revision

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 0; 
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    product = product * nums[j]
                }

            }
                result.push(product);
        }
        return result;
    }
}
