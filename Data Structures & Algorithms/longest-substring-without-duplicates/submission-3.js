class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {   
        // Optimised Code using sliding window 

        // initialize the pointers from 0 
        let left = 0; 
        let right = 0;
        // initialize the set to track the substring without duplicated
        let set = new Set();
        // initialize the max vatriaqble to track the length of the substring
        let max = 0;

        // iterate through every element of the string 
        while (right < s.length) {
            // check on every iteration that the right pionter value is in the set or not, if yes then remove that value from set from left side 
            // and this will run untill the duplicate will be removed that's why while loop
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            // after that add the right value in the set 
            set.add(s[right]);
            // get the maxlength of the current substring'
            let maxLength = right - left + 1;
            // update the max with maxlength nad max whichever is greater
            max = Math.max(max, maxLength);
            // then move right forward
            right++;
        }
        return max;
    }
}
