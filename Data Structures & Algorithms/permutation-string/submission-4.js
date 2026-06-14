class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Revision

        // Take the s1 and count the frequency of each element
        let s1Map = new Map();

        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
        }
     
        for (let i = 0; i <= s2.length - s1.length; i++) {
            let s2Map = new Map();
            for (let j = i; j < i + s1.length; j++) {
                s2Map.set(s2[j], (s2Map.get(s2[j]) || 0) + 1);
            }

            let match = true;

            for (let [key, value] of s1Map) {
                if (s2Map.get(key) !== value) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
        }
        return false;
        
    }
}
