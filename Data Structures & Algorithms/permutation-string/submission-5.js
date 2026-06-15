class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Optimised Code using sliding window 
        // first build the maps - count the freq of ecah element of s1 and make a window map for s2 using s1
        let s1Map = new Map();
        let s2Map = new Map();

        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
            s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
        }

     
        // Now i have both maps with same window size
        // now I need to compare both maps elements with each other, if they match return true
        // initialize 2 pointers to track the window
        function isMapEqual(s1Map, s2Map) {
            // first check the size of both maps 
            if (s1Map !== s2Map) return false;
            for (let [key, value] of s1Map) {
                if (s2Map.get(key) !== value) return false
            }
            return true;
        }
        // check the current maps if they are matching or not if yes, return true
        if (isMapEqual(s1Map, s2Map)) return true;

        // if not then move the window forward
        let left = 0; 
        let right = s1.length - 1;

        while (right < s2.length) {
            // remove the left element from the window - this means shrink the window
            s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
            // remove the right element from the window - this means expand the window 
            s2Map.set(s2[right], s2Map.get(s2[right]) + 1);

            // move the pointers forward from current index
            left++;
            right++;

            if (isMapEqual(s1Map, s2Map)) return true;
        }
        return false;

    }
}
