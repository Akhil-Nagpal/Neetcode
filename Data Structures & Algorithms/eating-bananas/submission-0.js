class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Optimised code using Binary Search

        function canFinish(piles, k, h) {
            let totalHours = 0;

            for (let pile of piles) {
                let hour = Math.ceil(pile / k);
                totalHours += hour;
            }
            return totalHours <= h;
        }

        let left = 1;
        let right = Math.max(...piles);

        let result = Math.max(...piles);

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (canFinish(piles, mid, h)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
}
