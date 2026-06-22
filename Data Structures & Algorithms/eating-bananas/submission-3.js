class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Optimised Code using binary search
        // Remember we need to calculate speed so every thing will be based on calculating speed
        
        let left = 1; // minimum possible eating speed
        let right = Math.max(...piles); // maximum possible eating speed

        let result = right // highest speed possible

        while (left <= right) {
            // calculate the middle 
            let mid = Math.floor((left + right) / 2);

            // get the total hours from each pile of all piles at the speed of mid
            let totalHours = 0;

            for (let pile of piles) {
                // this will give the total hours eating rate for every pile for all piles, so total hours is hours of all piles
                totalHours += Math.ceil(pile / mid);
            }
            
            // check if the total hours is less or equal then h if yes
            if (totalHours <= h) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
        return result;
    }
}
