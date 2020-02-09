'use strict';

const Tree = require('../Binary-search-tree/tree.js');
const Node = require('../Binary-search-tree/node.js');

const fizzBuzzTree = (root) => {
 
    if(root === null) return;
 
    if(root.value % 3 === 0 && root.value % 5 === 0) {
 
        root.value = 'FizzBuzz';
  }

  else if (root.value % 3 === 0) {
  
    root.value = 'Fizz';
  
}

else if (root.value % 5 === 0) {

    root.value = 'Buzz';

}

fizzBuzzTree(root.left);

fizzBuzzTree(root.right);
};

module.exports = fizzBuzzTree;