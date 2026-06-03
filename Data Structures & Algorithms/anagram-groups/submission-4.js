class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Revision
        let map = new Map();

        for (let str of strs) {
            let sortedStr = str.split("").sort().join("");

            if (!map.get(sortedStr)) {
                map.set(sortedStr, [])
            }

           map.get(sortedStr).push(str)
        }

        return Array.from(map.values())

    }
}
