class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Brute Force

        if (s.length < t.length) return "";

        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        let minLength = Infinity;
        let result = ""

        for (let i = 0; i < s.length; i++) {
            let sMap = new Map();
            for (let j = i; j < s.length; j++) {
                sMap.set(s[j], (sMap.get(s[j]) || 0) + 1);

                // check if the sMap have all the characters from tMap if yes then Smap is valid
                let valid = true;

                for (let [key, value] of tMap) {
                    if ((sMap.get(key) || 0) < value) {
                        valid = false;
                        break;
                    }
                }

                let winLength = j - i + 1;
                
                if (valid) {
                    if (winLength < minLength) {
                        minLength = winLength;
                        result = s.slice(i, j + 1);
                    }
                    break;
                }
            }
        }
        return result;
    }
}
