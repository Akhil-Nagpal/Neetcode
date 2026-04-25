class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Brute Force

        let cleanStr = "";

        for (let i = 0; i < s.length; i++) {
            let ch = s[i];

            if (/[a-zA-Z0-9]/.test(ch)) {
                cleanStr += ch.toLowerCase();
            }
        }
        let reversed = cleanStr.split("").reverse().join("");

        if (reversed === cleanStr) return true;
        return false;

    }
}
