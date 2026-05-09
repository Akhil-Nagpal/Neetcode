class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Brute Force

        if (t.length > s.length) return "";

        let targetMap = new Map();

        for (let i = 0; i < t.length; i++) {
            targetMap.set(t[i], (targetMap.get(t[i]) || 0) + 1);
        }

        let minLength = 0;
        let result = "";

        for (let i = 0; i < s.length; i++) {
            let currentMap = new Map();

            for (let j = i; j < s.length; j++) {
                currentMap.set(s[j], (currentMap.get(s[j]) || 0) + 1);

                let valid = true;

                for (let [key, value] of targetMap) {
                    if ((currentMap.get(key) || 0) < value) {
                        valid = false;
                        break;
                    }
                }

                if (valid) {
                    let windowLength = j - i + 1;

                    if (result === "" || windowLength < minLength) {
                        minLength = windowLength;
                        result = s.slice(i, j + 1);
                    }
                    break;
                }
            }
        }
        return result;

    }
}
