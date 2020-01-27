'use strict';

const util = require('util');


//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insert method that inserts a value as the head
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }


  //includes method, which returns a boolean for whether or not an item exists in the list
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        console.log(true);
        return true;
      } else {
        current = current.next;
      }
    } console.log(false);
    return false;
  }


  //adds a new node with that value to the end of the list
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  
  insertBefore(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    let previous = this.head;
    while (current.value !== value){
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
  }

  insertAfter(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  kFromEnd(k){
    if(typeof k !== 'number'){
      return false;
    }
    let cnt = 1;
    let current = this.head;
    while(current.next){
      current = current.next;
      cnt++;
    }
    let kpos = cnt - k;
    if(kpos < 0){
      return 'k is too big';
    }
    cnt = 1;
    current = this.head;
    while(cnt < kpos){
      current = current.next;
      cnt ++;
    }
    return current.value;
  }
}



let list = new LinkedList();
list.append('B Cat');
list.append('P Dog');
list.insert('H Cat');
list.insertAfter('B Cat', 'L Dog');
list.insertBefore('B Cat', 'A Dog');

module.exports = { LinkedList };