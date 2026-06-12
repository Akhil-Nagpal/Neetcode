class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Brute force using hash set
        
        // first initiallize 0 as the longest
        let max = 0;

        // iterate through all the elements
        for (let i = 0; i < s.length; i++) {
            // initialize the hashset to check the jth element with ith
            let set = new Set();
            // get the jth elementstarts from i 
            for (let j = i; j < s.length; j++) {
                // check if the jth elements is in the set or not, if yes then break cause we found a duplicate
                if (set.has(s[j])) break;
                // if set doesn't ahve that then add it to set 
                set.add(s[j]);
                // get the length of the substring
                let maxLength = j - i + 1; // this formual calculates the length of the string including both indexes
                // update the length with max or maxLength whichever is higher 
                max = Math.max(max, maxLength)
            }
        }
        return max;
    }
}
