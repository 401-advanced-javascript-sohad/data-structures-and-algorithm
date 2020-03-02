'use strict';

const BST = require('./tree-intersections.js');

describe('challenge 32 tree-intersection sohad qtaitat test ', () => {

  let tree1 = [ 9, 7, 17, 22, 20, 4, 3, 6, 5 ];
  let tree2 = [ 41, 12, 91, 5, 3, 2, 72, 53, 87 ];
  let correctValues = [ 3, 5 ];





  it('correct values test', () => {
    let tree = new BST();
    tree1.map(value => tree.add(value));
    let ti1 = tree;
    tree = new BST();
    tree2.map(value => tree.add(value));
    let ti2 = tree;
    let newArr = tree.tree_intersection(ti1, ti2);
    expect(newArr).toEqual(correctValues);
  });








});