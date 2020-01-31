'use strict';

const SLL = require('../lib/singly-linked-list.js');

describe('Singly Linked Lists', () => {
  
  it('can instantiate a new, empty list', () => {
    let list = new SLL();
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(Object);
    expect(list.head).toBeNull();
  });
  
  it('can insert new node to the head of an empty list', () => {
    let list = new SLL();
    list.insert('first insert');
    expect(list.head.data).toEqual('first insert');
    expect(list.head).not.toBeNull();
  });

  it('can insert another node to the head of the list', () => {
    let list = new SLL();
    list.insert('first insert');
    list.insert('second insert');
    expect(list.head.data).toEqual('second insert');
  });

  it('the head points to the next item in the list', () => {
    let list = new SLL();
    list.insert('first insert');
    list.insert('second insert');
    expect(list.head.next).toBeDefined();
    expect(list.head.next.data).toEqual('first insert');
  });

  it('can search for a value in the list with .includes() and returns true when found', () => {
    let list = new SLL();
    list.insert('first insert');
    list.insert('second insert');
    let result = list.includes('first insert');
    expect(result).toBeTruthy();
    result = list.includes('second insert');
    expect(result).toEqual(true);
  });

  it('can search for a value in the list with .includes() and returns false when not found', () => {
    let list = new SLL();
    list.insert('first insert');
    list.insert('second insert');
    let result = list.includes('not here');
    expect(result).toEqual(false);
  });

  it('prints a string of all values with .print()', () => {
    let list = new SLL();
    list.insert('first insert');
    list.insert('second insert');
    let result = list.print();
    expect(result).toEqual('List values: second insert, first insert');
  });

  it('can append a node to the end of an existing list', () => {
    let list = new SLL();
    list.insert('first insert');
    list.append('first append');
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.data).toEqual('first append');
  });

});

describe('insertBefore', () => {
  it('inserts a node correctly into an array', () => {
    let list = new SLL();
    list.insert('first insert');
    list.append('first append');
    list.insertBefore('first append', 'insertBefore');
    expect(list.head.next.data).toEqual('insertBefore');
  });
});
describe('insertAfter', () => {
  it('inserts a node correctly into an array', () => {
    let list = new SLL();
    list.insert('first insert');
    list.append('first append');
    list.insertAfter('first insert', 'insertAfter');
    expect(list.head.next.data).toEqual('insertAfter');
  });
});