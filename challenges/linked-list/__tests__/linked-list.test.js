'use strict';

const SohadLinkedList = require('../lib/singly-linked-list.js');



describe('Singly Linked Lists', () => {
  
  it('Can successfully instantiate an empty linked list', () => {
    let list = new SohadLinkedList();
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(Object);
    expect(list.head).toBeNull();
  });
  

  it('Can properly insert into the linked list', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    expect(list.head.data).toEqual('first insert');
    expect(list.head).not.toBeNull();
  });
  




  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    list.insert('second insert');
    expect(list.head.data).toEqual('second insert');
  });



  
  it('The head property will properly point to the first node in the linked list', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    list.insert('second insert');
    expect(list.head.next).toBeDefined();
    expect(list.head.next.data).toEqual('first insert');
  });
  


  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    list.insert('second insert');
    let result = list.includes('first insert');
    expect(result).toBeTruthy();
    result = list.includes('second insert');
    expect(result).toEqual(true);
  });
  
 
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    list.insert('second insert');
    let result = list.includes('not here');
    expect(result).toEqual(false);
  });

  

  it('can append a node to the end of an existing list', () => {
    let list = new SohadLinkedList();
    list.insert('first insert');
    list.append('first append');
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.data).toEqual('first append');
  });
});