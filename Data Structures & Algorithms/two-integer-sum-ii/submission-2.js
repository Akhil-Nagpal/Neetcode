class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // optimised Approach 

        let left = 0; 
        let right = numbers.length - 1;

        while (left < right) {
          if (numbers[left] + numbers[right] < target) {
            left++;
          } else {
            right--;
          }
          if (numbers[left] + numbers[right] === target) {
            return [numbers[left], numbers[right]];
          }
        }
    } 
}
