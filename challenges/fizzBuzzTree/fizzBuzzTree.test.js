'use strict';

const Tree = require('../Binary-search-tree/tree.js');
const Node = require('../Binary-search-tree/node.js');
const fbt = require('./fizzBuzzTree.js');



//////////////////////////////////////////////////////////////////////////////////////
const sohad = () => {
 tree.root.right = new Node(8);
  tree.root.left = new Node(15);
  tree.root.right.right = new Node(3);
   tree.root.left.left = new Node(99);
  tree.root.left.right = new Node(10);
 tree.root.right.left = new Node('string');
  tree.root.right.left.left = new Node({num: 30});
  
  return tree;

}


/////////////////////////////////////////////////////////////////////////////////////

describe('Fizz Buzz Tree ', () => {
  it('is a function', () => {
    expect(typeof fbt).toBe('function');
  });

                            //////////////////////////////

  it('If the value is divisible by 3, replace the value with " :) fizz :) "', () => {
    let tree = new Tree(3);
    fbt(tree.root);
    expect(tree.root.value).toBe('Fizz');
  });

                            //////////////////////////////

  it('If the value is divisible by 5, replace the value with " :) Buzz :) "', () => {
    let tree = new Tree(5);
    fbt(tree.root);
    expect(tree.root.value).toBe('Buzz');
  });

                            //////////////////////////////

  it('If the value is divisible by 3 and 5, replace the value with " *_* FizzBuzz *_* "', () => {
    let tree = new Tree(15);
    fbt(tree.root);
    expect(tree.root.value).toBe('FizzBuzz');
  });

                            //////////////////////////////

  it('If the value is not divisible by 3 or 5, simply turn the number into a String *_*', () => {
    let tree = new Tree(5);
    tree.root.left = new Node(15);
    tree.root.right = new Node(8);
    tree.root.left.left = new Node(99);
    tree.root.left.right = new Node(10);
    tree.root.right.left = new Node('string');
    tree.root.right.right = new Node(3);
    tree.root.right.left.left = new Node({num: 20});
    fbt(tree.root);
    const results = tree.preOrder();
    expect(results.toString()).toBe([ 'Buzz',
    'FizzBuzz',
    'Fizz',
    'Buzz',
    8,
    'string',
    { num: 20 },
    'Fizz' ].toString());
  });
});









// sohad Qtaitat