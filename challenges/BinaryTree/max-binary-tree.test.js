'use strict';

const findMaxVal = require('./max-binary-tree.js');

describe('Find Max Binary Tree', ()=>{
  let firstTree = null;


  beforeAll(()=>{
    let one = new findMaxVal.Node(2);
    let two = new findMaxVal.Node(7);
    let three = new findMaxVal.Node(5);
    let four = new findMaxVal.Node(2);
    let five = new findMaxVal.Node(6);
    let six = new findMaxVal.Node(9);
    let seven = new findMaxVal.Node(5);
    let eight = new findMaxVal.Node(33);
    let nine = new findMaxVal.Node(4);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = seven;
    five.right = eight;
    three.right = six;
    six.left = nine;

    firstTree = new findMaxVal.BinaryTreeMaxValue(one);
    secondTree = new findMaxVal.BinaryTreeMaxValue(three);
  });




  it('find the max val in the tree', ()=>{
    console.log(firstTree.findMaxVal());
    expect(firstTree.findMaxVal()).toEqual(33);
  });

});

