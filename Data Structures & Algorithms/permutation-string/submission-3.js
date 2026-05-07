class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // Brute Force

        // Take the s1 and store all the elements in map with their frequency
        let targetMap = new Map();

        for (let i = 0; i < s1.length; i++) {
            targetMap.set(s1[i], (targetMap.get(s1[i]) || 0) + 1);
        }
        // Now s1 map is fixed and we got the frequency of s1 elements
        // 

        for (let i = 0; i <= s2.length - s1.length; i++) {
            // Initiate the second map to compare the frequencies
            let currentMap = new Map();
            // generate the substrings and ad their frequencies
            for (let j = i; j <= i + s1.length - 1; j++) {
                currentMap.set(s2[j], (currentMap.get(s2[j]) || 0) + 1);
            }

            // check if the size of bot hare same or if 
            if (currentMap.size !== targetMap.size) continue;

            // check if the currentMap has samke key and value as targetMap
            let match = true;

            for (let [key, value] of targetMap) {

                if (currentMap.get(key) !== value) {
                    match = false;
                    break;
                }
            }

            if (match) return true; 
        }
        return false;

    }
}
