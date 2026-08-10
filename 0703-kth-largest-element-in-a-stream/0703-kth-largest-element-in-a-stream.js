/**
 * @param {number} k
 * @param {number[]} nums
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


var KthLargest = function(k, nums) {
    this.k = k;
    this.minheap = new MyMinHeap();
    for (let i = 0; i < nums.length; i++) {
        this.minheap.push(nums[i]);
        if (this.minheap.size() > this.k) {
            this.minheap.pop();
        }
    }
};


/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minheap.push(val);
    if (this.minheap.size() > this.k) {
        this.minheap.pop();
    }
    return this.minheap.peek();
};