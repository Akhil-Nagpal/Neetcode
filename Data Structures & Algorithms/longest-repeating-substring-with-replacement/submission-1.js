class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Revision 
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            let map = new Map();
            let mapFreq = 0;
            for (let j = i; j < s.length; j++) {
                map.set(s[j], (map.get(s[j]) || 0) + 1 );
                mapFreq = Math.max(mapFreq, map.get(s[j]));

                let changesNeeded = (j - i + 1) - mapFreq;

                if (changesNeeded <= k) {
                    max = Math.max(j - i + 1, max)
                }
            }
        }
        return max;
    }
}
