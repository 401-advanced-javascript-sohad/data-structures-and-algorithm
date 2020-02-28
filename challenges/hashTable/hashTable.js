/* eslint-disable strict */
'use strict';

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if (!this.head) this.head = node;
    else{
      node.next = this.head;
      this.head = node;
    }
  }
}

class HashTable {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  /////////////////////////////////////////////Hash//////////////////////////////////////////////////////////
  hash(key){
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key[i].charCodeAt(0);
    }
    return sum * 19 % this.size;
  }
  
  
  /////////////////////////////////////////////ADD//////////////////////////////////////////////////////////



  add(key, value){

    let hashedKey = this.hash(key);
    
    if (!this.storage[hashedKey]) {
      let linkedList = new LinkedList();
      linkedList.add({key,value});
      this.storage[hashedKey] = linkedList;
    
    }else{
      this.storage[hashedKey].add({key, value});
    }
  }
  
  ////////////////////////////////////////////Get//////////////////////////////////////////////////////////

  
  
  get(key){
    for(let i = 0; i <= this.storage.length;i++){

      if (this.storage[i] && this.storage[i].head.data.key === key) return this.storage[i].head.data.value;
    }
    return 'Sorryy The Item Not Exist';
  }


  /////////////////////////////////////////////Contain//////////////////////////////////////////////////////////


  contain(key){
    for(let i = 0; i <= this.storage.length;i++){
        
      if (this.storage[i] && this.storage[i].head.data.key === key) return true;
    }
    return null;
  }
}

module.exports = HashTable;




