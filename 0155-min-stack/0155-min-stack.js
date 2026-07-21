
var MinStack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack1.push(value);
    if(this.stack2.length === 0){
        this.stack2.push(value);
    }else{
        this.stack2.push(Math.min(value, this.stack2[this.stack2.length - 1]));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack1.pop();
    this.stack2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */