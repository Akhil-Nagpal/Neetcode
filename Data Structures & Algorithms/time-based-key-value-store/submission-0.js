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
        // map is already given so Hashmap is is used to set the key value pairs

        // check if the map have already the key, if not then set the key 
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        // set the value to the key if the key is already available
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // here we have to get all the values of that specific key 
        // step 1: check if there is no key, if yes return empty string
        if (!this.keyStore.has(key)) return "";

        // store the result
        let result = "";

        // iterate through every list in map of a specific key not map, cause we need to access the list of a single key
        for (let [time, value] of this.keyStore.get(key)) {
            // check if the timestamp of the map is lesser or equal then timestampit asked for
            if (time <= timestamp) {
                result = value
            } else {
                break;
            }
        }
        return result;
        
    }
}
