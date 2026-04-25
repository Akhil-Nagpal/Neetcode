class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Brute Force 
        let reversed = s.split("").reverse().join("");

        // console.log(reversed);

        if (s === reversed) return true;
        return false;
    }
}
