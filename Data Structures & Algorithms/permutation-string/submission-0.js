class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Brute Force

        let targetMap = new Map();

        for (let i = 0; i < s1.length; i++) {
            if (!targetMap.get(s1[i])) {
                targetMap.set(s1[i], (targetMap.get(s1[i]) || 0) + 1);
            }
        }

        for (let i = 0; i < s2.length; i++) {
            let currentMap = new Map();
            for (let j = i; j < i + s1.length - 1; j++) {
                if (!currentMap.get(s2[j])) {
                    currentMap.set(s2[j], (currentMap.get(s2[j]) || 0) + 1);
                }

                if (currentMap.size !== targetMap.size) return false;
                
                for (let [key, value] of targetMap) {
                    if (currentMap.get(key) !== value) {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
