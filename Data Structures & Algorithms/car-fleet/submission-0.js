class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let pairs = [];
        for (let i = 0; i < position.length; i++) {
            pairs.push([position[i], speed[i]]);
        };

        pairs.sort((a, b) => b[0] - a[0]);

        // let fleetCount = 0;
        // let lastFleetTime = 0;
        
        // for (let i = 0; i < )
        
    }
}
