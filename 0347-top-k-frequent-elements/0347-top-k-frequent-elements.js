/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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

            if (this.heap[parent][0] <= this.heap[i][0]) break;

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
                    this.heap[left][0] < this.heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][0] < this.heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }
        }

        return min;
    }
}
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i] , (map.get(nums[i]) || 0) + 1);
    }
    let minheap = new MyMinHeap();
    for(let [num , frequency] of map){
        minheap.push([frequency , num]);
        while(minheap.size() > k){
            minheap.pop();
        }
    }
    let ans = [];
    while(minheap.size() > 0){
        ans.push(minheap.pop()[1]);
    }
    return ans;
};