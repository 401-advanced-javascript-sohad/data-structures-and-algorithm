'use strict';


class Node {
  constructor(value) {
      this.right = null;
    this.left = null;
      this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.forword = null;
    this.backword = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.forword) {
      this.backword.next = node;
      this.backword = node;
    }
    else {
      this.forword = node;
      this.backword = node;
    }
  }




  dequeue() {
    if (!this.forword) {
      return null;
    }
    let dequeuedValue = this.forword.value;
    this.forword = this.forword.next;
    return dequeuedValue;
  }

  peek() {
    if (!this.forword) {
      return null;
    }
    return this.forword.value;
  }
}




class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }



  breadthFirst() {
    const queue = new Queue();
    queue.enqueue(this.root);
    const resultArray = [];

    while (queue.peek() !== null) {
      const current = queue.dequeue();
      resultArray.push(current.value);
  
  
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
  
  
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
    return resultArray;
  }
}


/////////////////////////////////////////////////////////////////////////////////////



let one = new Node(1);
let four = new Node(4);
let six = new Node(6);
let eight = new Node(8);

one.right = four;
four.left = six;
four.right = eight;

const tree = new BinaryTree(one);



console.log(tree.breadthFirst());

module.exports = {
  Node,
  Queue,
  BinaryTree
}