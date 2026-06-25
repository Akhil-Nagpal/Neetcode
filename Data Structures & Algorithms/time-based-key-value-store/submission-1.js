class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // set the timestapms and value to the map 

        // check if the key already exists, if not then set the key with a list
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []); // this set the key and empty array as a list in value
        }
        // if key already exists then push the timestamp and value in that particualr key list
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // Optimised Code using Binary Search
        // Now map is built and we need to get the value according to its timestamp

        // check if the key exists or not if not return empty value
        if (!this.keyStore.has(key)) return "";

        // initialize the 2 pointers to iterate
        let list = this.keyStore.get(key);
        let left = 0; 
        let right = list.length - 1;
        let result = "";

        // iterate through till left meet right 
        while (left <= right) {
            // calculate the middle 
            let mid = Math.floor((left + right) / 2);

            // check if the timestamp of the mid is less or equal then given timestamp, if yes then store the answer to the result and move left till mid 
            if (list[mid][0] <= timestamp) {
                result = list[mid][1];
                left = mid + 1;
            } else {
                // check if the timestamp pf the mid is greater then search to left side 
                right = mid - 1;
            }
             
        }
        return result;
        
        
    }
}
