'use strict';

const stacksAndQueues = {};

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.unshift(value);
  }

  pop() {
    return this.stack.shift();
  }
}


//*************************************************************************************** */


class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  // inserts value in Queue using FIFO
  enqueue(value) {
    return this.stackA.push(value);
  }

  dequeue() {
    // stackA is transformed from LIFO to FIFO by inserting into stackB
    if (this.stackB.stack.length > 0) {
      return this.stackB.pop();
    } 
    let popValue = null;
    // re-stack LIFO to FIFO
    while (this.stackA.stack.length - 1 >= 0) { 
      popValue = this.stackA.pop();
      this.stackB.push(popValue);
    }
    return this.stackB.pop();
  }



  clearQueue() {
    while (this.stackB.stack.length - 1 >= 0) {
      this.stackB.pop();
    }
    return this.stackB;
  }
}

const myQueue = new Queue();
stacksAndQueues.Queue = myQueue;
// console.log(myQueue);

module.exports = myQueue;