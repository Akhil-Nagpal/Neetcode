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

     
        // Now I have both maps with same window size
        // now I need to compare both maps elements with each other, if they match return true
        function isMapEqual(s1Map, s2Map) {
            // first check the size of both maps 
            if (s1Map.size !== s2Map.size) return false;
            for (let [key, value] of s1Map) {
                if (s2Map.get(key) !== value) return false
            }
            return true;
        }
        // check the current maps if they are matching or not if yes, return true
        if (isMapEqual(s1Map, s2Map)) return true;

        // if not then move the window forward
        // initialize the 2 pointers for tracking the window
        let left = 0; 
        let right = s1.length - 1;

        while (right < s2.length - 1) {
            // remove the left element from the window - this means shrink the window
            s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
            // check if the left element freq is 0 or not if yes then remove it from window
            // This step is critical
            if (s2Map.get(s2[left]) === 0) s2Map.delete(s2[left])
            
            // move the pointers forward from current index
            left++;
            right++;

            // remove the right element from the window - this means expand the window 
            s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);

            // compare if the both map have same values with same freq
            if (isMapEqual(s1Map, s2Map)) return true;
        }
        return false;

    }
}
