'use strict';

const Node = require('./node.js');

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

  
class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  add(value) {

    const _next = root => {

      if (value < root.value) {

        if(root.left === null) {
          
            root.left = new Node(value);
          
            return;
        
        
        } else { _next (root.left) };
      }

      else if (value > root.value) {

        if(root.right === null) {
          
            root.right = new Node(value);
          
            return;
        } else { _next(root.right) };
      }    
    }
    _next(this.root);
  }



  contains(value) {
    let result = false;
    const _next = (node) => {
      if (node === null) {
        return;
      }
      if(node.value === value) {
        result = true;
      }
      _next(node.right);
      _next(node.left);
    }
    
    _next(this.root);
    return result;
  }
}

module.exports = BinarySearchTree;