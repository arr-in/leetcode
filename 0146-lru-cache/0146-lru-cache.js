/**
 * @param {number} capacity
 */

class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.left = new Node(0,0);
    this.right = new Node(0,0);
    this.left.next = this.right;
    this.right.prev = this.left;
};
LRUCache.prototype.remove = function(node){
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}
LRUCache.prototype.insert = function(node){
    let prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)){
        return -1;
    }
    let node = this.map.get(key);
    this.remove(node);
    this.insert(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        this.remove(node);
    }
    let node = new Node(key, value);
    this.insert(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
        let lru = this.left.next;
        this.remove(lru);
        this.map.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */