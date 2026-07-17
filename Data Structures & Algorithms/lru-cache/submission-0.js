class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    };
};

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // define the capacity and capacity can be given as a input 
        this.capacity = capacity;
        this.map = new Map();

        // define the head and tail with key value pair 
        this.head = new Node(0,0)
        this.tail = new Node(0,0);
        // point both to each other 
        this.head.next = this.tail;
        this.tail.prev = this.head;

       
    };
     // Now we define the helper functions 
    // remove the node function 
    remove(node) {
        // point the prev node from current node to the next node 
        node.prev.next = node.next;
        // same with the next node 
        node.next.prev = node.prev;
    };

    insertAtHead(node) {
        // first take the current node and point it to head's next node 
        node.next = this.head.next;
        // point current node prev to its prev node 
        node.prev = this.head;
        // point head to its next node to its prev one which is the current node
        this.head.next.prev = node;
        // point head to current node 
        this.head.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // check if the key exists or not 
        if (!this.map.has(key)) return -1;
        // if the key exists then take the key and find the node 
        let node = this.map.get(key);
        // remove the node from tail 
        this.remove(node);
        // insert the removed node to the head
        this.insertAtHead(node); 
        
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {}
}
