  
'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value){ 
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let current = this.head;
    while(current.next) {
      if(current.value === value) { return true; }
    }
    
}}