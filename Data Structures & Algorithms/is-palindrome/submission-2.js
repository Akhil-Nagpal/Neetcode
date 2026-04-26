class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Optimised Approach using Two Pointers - Opposite Pointers

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!/[a-zA-Z0-9]/.test(s[left])) {
                left++;
            }
            if (!/[a-zA-Z0-9]/.test(s[right])) {
                right--;
            }
            
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            return true;
        }
    }
}
