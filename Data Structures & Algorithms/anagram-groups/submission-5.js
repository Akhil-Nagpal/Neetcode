class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Revision optimisation using Hash Table
        let map = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            let key = count.join(",");

            // check if the map have the key or not 
            if (!map.get(key)) {
                map.set(key, [])
            }

            // if key already exists 
            map.get(key).push(str)
        }
        return Array.from(map.values())

        
    }
}
