'use strict';

const Node = require('./breadth-first.js').Node;
const BinaryTree = require('./breadth-first.js').BinaryTree;


describe('test breadth first traversal', () => {

  it('can traverse balanced tree', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;

    const tree = new BinaryTree(one);
    expect(tree.breadthFirst()).toEqual([1,2,3,4,5,6,7]);
  })



  

  it('can traverse an unbalanced tree', () => {
    let one = new Node(1);
    let three = new Node(3);
    let six = new Node(6);
    let seven = new Node(7);

    one.right = three;
    three.left = six;
    three.right = seven;

    const tree = new BinaryTree(one);
    expect(tree.breadthFirst()).toEqual([1,3,6,7]);
  })
});