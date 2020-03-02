'use strict';

const Node = require('./node.js');

class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    }
    
    
    /////////////////////////////////////////////////insert/////////////////////////////////////////////////////////


    const _insert = node => {
      if(value < node.value) {
        if(node.left === null) {
          node.left = new Node(value);
          return;
        } else if(node.left !== null) {
          return _insert(node.left);
        }
      } else if(value > node.value) {
        if(node.right === null) {
          node.right = new Node(value);
          return;
        } else if(node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };
    _insert(node);
  }
  
  
  ////////////////////////////////////////////tree_intersection/////////////////////////////////////////////////////////



  tree_intersection(node, nodeTwo) {
    let results = [];
    if(!node.root || !nodeTwo.root) {
      return 'Node Empty';
    }
  
    let _walk = node => {
  
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      let _jump = nodeTwo => {
  
        if(nodeTwo.left) {
          _jump(nodeTwo.left);
        }
        if(nodeTwo.right) {
          _jump(nodeTwo.right);
        }
        if(node.value === nodeTwo.value) {
          results.push(node.value);
        }
      };
      _jump(nodeTwo.root);
    };
    _walk(node.root);
    return results;
  }
}


module.exports = BST;