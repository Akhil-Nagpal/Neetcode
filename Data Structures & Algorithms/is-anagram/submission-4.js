class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Brute Force
        
        // Edge case 
        if (s.length !== t.length) return false;

        // sort them
        let sortedS = s.split("").sort().join("");
        let sortedT = t.split("").sort().join("");

        if (sortedS === sortedT) return true

        return false
    }
}
