'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    try {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return 'New node inserted to list';
    }
    catch(e) {
      return 'Error calling .insert()';
    }
  }

  append(data) {
    try {
      let newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      }
      else {
        let currentNode = this.head;
        while(currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      return `New node appended to list`;
    }
    catch(e) {
      return 'Error calling .append()';
    }
  }

  includes(value) {
    try {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.data === value) {
          return true;
        }
        else {
          currentNode = currentNode.next;
        }
      }
      if (currentNode.data === value) {
        return true;
      }
      else {
        return false;
      }
    }
    catch(e) {
      return 'Error calling .includes()';
    }
  }

  print() {
    try {
      let currentNode = this.head;
      if (currentNode === null) {
        return 'Empty list!';
      }
      let result = 'List values: ';
      while(currentNode.next !== null) {
        result += `${currentNode.data}, `;
        currentNode = currentNode.next;
      }
      result += currentNode.data;
      return result;
    }
    catch(e) {
      return 'Error calling .print()';
    }
  }
}

module.exports = SinglyLinkedList;