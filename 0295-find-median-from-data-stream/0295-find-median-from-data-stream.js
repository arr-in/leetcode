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
class MyMaxHeap {
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

            if (this.heap[parent] >= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        let max = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let largest = i;

                if (
                    left < this.heap.length &&
                    this.heap[left] > this.heap[largest]
                ) {
                    largest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] > this.heap[largest]
                ) {
                    largest = right;
                }

                if (largest === i) {
                    break;
                }

                [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

                i = largest;
            }
        }

        return max;
    }
}
var MedianFinder = function() {
    this.maxheap = new MyMaxHeap;
    this.minheap = new MyMinHeap;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.minheap.length === 0 && this.maxheap.length === 0){
        this.maxheap.push(num);
    }else if(this.maxheap.length > 0 && this.minheap.length === 0){
        this.minheap.push(num);
    }else if(this.maxheap.peek() < num){
        this.minheap.push(num);
    }else{
        this.maxheap.push(num);
    }

    if(this.maxheap.size() > this.minheap.size() + 1){
        this.minheap.push(this.maxheap.pop());
    }else if(this.minheap.size() > this.maxheap.size()){
        this.maxheap.push(this.minheap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxheap.size() > this.minheap.size()){
        return this.maxheap.peek();
    }else{
        return ( this.maxheap.peek() + this.minheap.peek() ) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */