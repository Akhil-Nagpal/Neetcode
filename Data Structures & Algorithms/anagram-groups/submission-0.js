class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Brute force

       let map = new Map();

       for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!map.get(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);

       }
        return Array.from(map.values());

    }
}

// Time Complexity - O(n * nlogn) 