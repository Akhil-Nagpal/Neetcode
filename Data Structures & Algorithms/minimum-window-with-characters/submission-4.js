class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Optimised code using sliding window    
        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        let left = 0;
        let right = 0;
        let sMap = new Map();
        let minLength = Infinity;
        let result = "";
        let have = 0;

        while (right < s.length) {
            // build the sMap 
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
            // check if the current element exists in tMap - if yes -->
            if (tMap.has(s[right])) {
                // now check if the sMap element count is same as tMap - if yes -->
                if (sMap.get(s[right]) === tMap.get(s[right])) {
                    // increase the count of have by 1
                    have++;
                }
            }

            // once we get the have count, then we check if the have is equal to tmap.size, if yes -->
            while (have === tMap.size) {
                // get the window length 
                let winLength = right - left + 1;
                // check if the winlength is smaller then minLength, if yes update the minLength
                if (winLength < minLength) {
                    minLength = winLength;
                    // extract the substring from the window
                    result = s.slice(left, right + 1);
                }

                // now shrink the window until the have stays valid 
                // first remove the freq of s[left]
                sMap.set(s[left], sMap.get(s[left]) - 1);

                // check if the windopw becomes invalid - 
                // so if tMap have that left character count greater then its on smap that means window gets invalid then decrease the have
                if (tMap.has(s[left]) && sMap.get(s[left]) < tMap.get(s[left])) {
                    have--;
                }
                left++;
            }
            right++;
            
        }
        return result;


    }
}
