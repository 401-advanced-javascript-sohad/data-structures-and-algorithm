'use strict';


class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
  
class BinaryTreeMaxValue {

  constructor(root = null){
    this.root = root;
  }
  



  /////////////////////////////findMaxVal//////////////////////////////////////////
  findMaxVal(){
    let storage = [];
    let find = (node)=>{
      storage.push(node.value); //push the value

      if (node.left) find(node.left);
      if (node.right) find(node.right);
    };


    find(this.root);
    let max = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i] > max) max = storage[i];
    }
    return max;
  }
}




module.exports = {BinaryTreeMaxValue,Node};