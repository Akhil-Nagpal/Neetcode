class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        for (let i = 0; i < s.length; i++) {
            if (s.includes("()") || s.includes("{}") || s.includes("[]")) {
               return true;
            }
        }
        return false;
    }
}
