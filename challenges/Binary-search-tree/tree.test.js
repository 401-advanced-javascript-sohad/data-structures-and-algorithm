'use strict';

const BinaryTree = require('./tree.js')
const BinarySearchTree = require('./binary-search-tree.js')
const Node = require('./node.js')

const createTree = () => {
 
    let sohadBinaryTree= new BinaryTree(1);
 
    sohadBinaryTree.root.left = new Node(2);
 
    sohadBinaryTree.root.right = new Node(3);
 
    sohadBinaryTree.root.left.left = new Node(4);
 
    sohadBinaryTree.root.left.right = new Node(5);
 
    sohadBinaryTree.root.right.left = new Node(6);
 
    sohadBinaryTree.root.right.right = new Node(7);
 
    return sohadBinaryTree;
}





///////////////////////////////////////////////Binary Tree////////////////////////////////////////////////////////




describe('Binary Tree', () => {

//1- Can successfully instantiate an empty tree
  it('Can successfully instantiate an empty tree', () => {
  
    let sohadBinaryTree = new BinaryTree();
  
    expect(sohadBinaryTree).toBeInstanceOf(BinaryTree);
  });
                                        
                         /////////////////////////////////////////////////////////

// 2- Can successfully instantiate a tree with a single root node
  it('Can successfully instantiate a tree with a single root node', () => {
    let sohadBinaryTree = new BinaryTree(1);
   
    expect(sohadBinaryTree.root).toBeDefined();
   
    expect(sohadBinaryTree.root.value).toEqual(1);
  });

                         /////////////////////////////////////////////////////////


  //3- Can successfully add a left child and right child to a single root node
it('Can successfully add a left child and right child to a single root node ', () => {
   
    let sohadBinaryTree = new BinaryTree(1);
    sohadBinaryTree.root.left = new Node(5);
    sohadBinaryTree.root.right = new Node(9);
    expect(sohadBinaryTree.root.left.value).toEqual(5);
    expect(sohadBinaryTree.root.right.value).toEqual(9);
  });


                           /////////////////////////////////////////////////////////


 // 4-Can successfully return a collection from a preorder traversal
 it('Can successfully return a collection from a preorder traversal', () => {
    
    let sohadBinaryTree = createTree();
    
    let preOrder = sohadBinaryTree.preOrder();
    
    console.log(preOrder)
    
    expect(preOrder).toEqual([1, 2, 4, 5, 3, 6, 7])
  });

                           /////////////////////////////////////////////////////////


// 5- Can successfully return a collection from an inorder traversal
  it('Can successfully return a collection from an inorder traversal', () => {
   
    let sohadBinaryTree = createTree();
   
    let inOrder = sohadBinaryTree.inOrder();
   
    console.log(inOrder)
   
    expect(inOrder).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });

                         /////////////////////////////////////////////////////////


 // 6-Can successfully return a collection from a postorder traversal
 it('Can successfully return a collection from a postorder traversal', () => {
  
    let sohadBinaryTree = createTree();
  
    let postOrder = sohadBinaryTree.postOrder();
  
    console.log(postOrder)
  
    expect(postOrder).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});




///////////////////////////////////////////Binary Search Tree//////////////////////////////////////////////////////////


//1- Can successfully instantiate an empty tree
// 2- Can successfully instantiate a tree with a single root node
//3- Can successfully add a left child and right child to a single root node
// 4-Can successfully return a collection from a preorder traversal
// 5- Can successfully return a collection from an inorder traversal
// 6-Can successfully return a collection from a postorder traversal

describe('Binary Search Tree', () => {

  it(' Can successfully instantiate an empty tree', () => {

    let sohadBinaryTree = new BinarySearchTree();
    expect(sohadBinaryTree).toBeInstanceOf(BinarySearchTree);
  });


                         /////////////////////////////////////////////////////////



  it('Can successfully instantiate a tree with a single root node', () => {
    let sohadBinaryTree = new BinarySearchTree(1);
    expect(sohadBinaryTree.root).toBeDefined();
    expect(sohadBinaryTree.root.value).toEqual(1);
  });

                           /////////////////////////////////////////////////////////


  it('Can successfully add a left child and right child to a single root node ', () => {
    let sohadBinaryTree = new BinarySearchTree(1);
    sohadBinaryTree.root.left = new Node(5);
    sohadBinaryTree.root.right = new Node(9);
    expect(sohadBinaryTree.root.left.value).toEqual(5);
    expect(sohadBinaryTree.root.right.value).toEqual(9);
  });


                           /////////////////////////////////////////////////////////


  it('can add an item to a tree', () => {
    let sohadBinaryTree = new BinarySearchTree(10);
    expect(sohadBinaryTree.root.left).toBeNull();
    sohadBinaryTree.add(2);
    expect(sohadBinaryTree.root.left).not.toBeNull();
    expect(sohadBinaryTree.root.left.value).toEqual(2);
  });

                           /////////////////////////////////////////////////////////


  it('adds left value < right value', () => {
    let sohadBinaryTree = new BinarySearchTree(10);
    sohadBinaryTree.add(5);
    expect(sohadBinaryTree.root.left.value).toEqual(5);
    sohadBinaryTree.add(20);
    expect(sohadBinaryTree.root.right.value).toEqual(20);
    sohadBinaryTree.add(15);
    expect(sohadBinaryTree.root.right.left.value).toEqual(15);
  });

 
                           /////////////////////////////////////////////////////////


  it('returns a boolean', () => {
    let sohadBinaryTree = new BinarySearchTree(1);
    let result = sohadBinaryTree.contains(5);
    expect(result).toBe(false);
  });

                           /////////////////////////////////////////////////////////


  it('returns true output if a value in the tree', () => {
    let sohadBinaryTree = new BinarySearchTree(10);
    sohadBinaryTree.add(5);
    sohadBinaryTree.add(2);
    sohadBinaryTree.add(4);
    let result = sohadBinaryTree.contains(4);
    expect(result).toBe(true);
  })
})