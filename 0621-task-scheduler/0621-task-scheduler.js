/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
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

            if (this.heap[parent] >= this.heap[i]) break;

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

                if (largest === i) break;

                [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

                i = largest;
            }
        }

        return max;
    }
}
var leastInterval = function(tasks, n) {
    let map = new Map();
    for(let i = 0 ; i < tasks.length ; i++){
        map.set(tasks[i] , (map.get(tasks[i]) || 0 )+1);
    }
    let maxheap = new MyMaxHeap();
    for(let frequency of map.values()){
        maxheap.push(frequency);
    }
    let queue = [];
    let front = 0;
    let time = 0;
    while(maxheap.size() > 0 || front < queue.length){
        time++;
        if(maxheap.size() > 0){
            let frequency = maxheap.pop();
            frequency--;
            if(frequency > 0){
                queue.push([frequency , time+n]);
            }
        }
        if(front < queue.length && queue[front][1] === time){
            let current = queue[front];
            front++;
            maxheap.push(current[0]);
        }
    }
    return time;
};