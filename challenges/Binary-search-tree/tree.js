'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }

  /////////////////////////////////////////////preOrder/////////////////////////////////////////////////////////
  
  preOrder() {
  
    const output = [];

    const _next = (node, array) => {
      if (node === null) {

        return;
      }
      array.push(node.value);
      _next(node.left, output);
      _next(node.right, output);
    };

    _next(this.root, output);
    return output;
  }

  /////////////////////////////////////////////inOrder/////////////////////////////////////////////////////////


  inOrder() {
    const output = [];

    const _next = (node, array) => {
      if (node === null) {
        return;
      }
      _next(node.left, output);
      array.push(node.value);
      _next(node.right, output);
    };
    
    _next(this.root, output);
    return output;
  }

  /////////////////////////////////////////////postOrder/////////////////////////////////////////////////////////


  postOrder() {
    const output = [];

    const _next = (node, array) => {
      if (node === null) {
        return;
      }
      _next(node.left, output);
      _next(node.right, output);
      array.push(node.value);
    };

    _next(this.root, output);
    return output;
  }
}

module.exports = BinaryTree;