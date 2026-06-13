class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Optimised Code using Sliding Window
        let left = 0; 
        let right = 0;
        let map = new Map();
        let mapFreq = 0;
        let max = 0;

        while (right < s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            mapFreq = Math.max( mapFreq, map.get(s[right]));

            let chnagesNeeded = (right - left + 1) - mapFreq;

            if (chnagesNeeded > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            max = Math.max(max, right - left + 1)
            right++
        }
        return max;
    }
}
