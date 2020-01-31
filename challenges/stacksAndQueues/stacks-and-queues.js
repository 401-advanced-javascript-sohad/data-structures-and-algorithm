'use strict';


class Stack {

  constructor () {
    this.storage = [];
    this.top = null;
    this.length = 0;
  }

  push(entry) {
    this.top = entry;
    return this.length = this.storage.push(entry); //.push returns the length of the array
  }

  peek() {
    return this.top;
    // return this.storage[this.length -1] || null;
  }
  pop() {
    let result = this.storage.pop() || null;
    this.top = this.storage[this.storage.length -1] || null;
    result && this.length--;
    return result;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////

class Queue {
  constructor() {
    this.length = 0;
    this.storage = [];
    // this.top = null; 
    // this.front = null; 
  }
  enqueue(entry) {
 
    this.length ++;
    return this.storage.unshift(entry);
  }
  peek() {
    return this.storage[0];
  }
  dequeue() {
    this.length && this.length --;
    return this.storage.pop() || null;
  }

}

module.exports = {Stack, Queue};