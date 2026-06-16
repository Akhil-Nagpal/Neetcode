class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Brute Force

        // edge case: if t is longer than s, no valid window can ever exist
        if (s.length < t.length) return "";

        // build a map of required characters and their counts from t
        // example: t="ABC" -> tMap = {A:1, B:1, C:1}
        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        // tracks the smallest valid window length found so far
        let minLength = Infinity;
        // stores the actual substring of the smallest valid window found so far
        let result = "";

        // outer loop: try every possible starting index for the window
        for (let i = 0; i < s.length; i++) {
            // fresh frequency map for this new starting point
            let sMap = new Map();

            // inner loop: expand the window one character at a time from i
            for (let j = i; j < s.length; j++) {
                // add the current character into our window's frequency map
                sMap.set(s[j], (sMap.get(s[j]) || 0) + 1);

                // assume the window is valid until proven otherwise
                let valid = true;

                // check every required character from t against our current window
                for (let [key, value] of tMap) {
                    // if our window doesn't have enough of this character, it's invalid
                    if ((sMap.get(key) || 0) < value) {
                        valid = false;
                        break; // no need to check further, already invalid
                    }
                }

                // length of the current window (inclusive of both i and j)
                let winLength = j - i + 1;

                if (valid) {
                    // only update our answer if this window is smaller than the best one so far
                    if (winLength < minLength) {
                        minLength = winLength;
                        // extract the actual characters from index i to j (inclusive)
                        result = s.slice(i, j + 1);
                    }
                    // once valid, no point expanding further for this starting point i
                    // (a longer window from the same i can never be shorter)
                    break;
                }
            }
        }

        // return the smallest valid window found, or "" if none existed
        return result;
    }
}