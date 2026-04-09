class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // optimised code using Hashtable 

        let map = new Map();

        for (let str of strs) {
            // hashtable 
            let count = new Array(26).fill(0);
            // looping throught every character of str
            for (let char of str) {
                // get the index of the character
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;

            }
                // check if the char is in the map or not 
                let key = count.join("");

                // check if the key exists in the map or not if not then set the key and value in map
                if (!map.get(key)) {
                    map.set(key, []);
                }
                map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}
