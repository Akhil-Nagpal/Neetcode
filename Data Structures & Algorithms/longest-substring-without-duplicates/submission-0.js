class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Brute Force
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            let set = new Set();

            for (let j = i; j < s.length; j++) {
                if (set.has(s[j])) break;
                set.add(s[j]);

                let currentLength = j - i + 1;

                max = Math.max(currentLength, max);
            }
        }
        return max;
    }
}
