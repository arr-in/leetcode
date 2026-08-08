/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        let min = this.heap[0];

        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;

                let smallest = i;

                if (
                    left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === i) {
                    break;
                }

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }
        }

        return min;
    }
}
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0){
        return false;
    }
    let map = new Map();
    for(let i = 0 ; i < hand.length ; i++){
        map.set(hand[i] , (map.get(hand[i]) || 0) + 1);
    }
    let minheap = new MyMinHeap();
    for(let nums of map.keys()){
        minheap.push(nums);
    }
    while(minheap.size() > 0){
        let first = minheap.peek();
        for(let i = first ; i < first + groupSize ; i++){
            if(!map.has(i) || map.get(i) === 0){
                return false;
            }
            map.set(i , map.get(i) - 1);
            if(map.get(i) === 0){
                if(i !== minheap.peek()){
                    return false;
                }
                minheap.pop();
            }
        }
    }
    return true;
};