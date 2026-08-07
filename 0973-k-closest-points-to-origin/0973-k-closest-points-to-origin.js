/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
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

            if (this.heap[parent][0] >= this.heap[i][0]) break;

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
                    this.heap[left][0] > this.heap[largest][0]
                ) {
                    largest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][0] > this.heap[largest][0]
                ) {
                    largest = right;
                }

                if (largest === i) break;

                [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

                i = largest;
            }
        }

        return max;
    }
}
var kClosest = function(points, k) {
    let maxheap = new MyMaxHeap();
    for(let i = 0 ; i < points.length ; i++){
        let dist = Math.sqrt( (points[i][1])**2 + (points[i][0])**2);
        maxheap.push([ dist , points[i] ]);
        while(maxheap.size() > k){
            maxheap.pop();
        }
    }
    let ans = [];
    while(maxheap.size() > 0){
        ans.push(maxheap.pop()[1]);
    }
    return ans;
};