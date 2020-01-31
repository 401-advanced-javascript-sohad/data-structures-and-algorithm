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
      return 'Error calling ';
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
      return 'Error calling ';
    }
  }

  insertBefore(goesBeforeThis, newData) {
    if(goesBeforeThis === this.head.data) {
      let newNode = new Node(newData);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next !== null) {
      if(currentNode.next.data === goesBeforeThis) {
        let newNode = new Node(newData);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return newNode;
      }
      else {
        currentNode = currentNode.next;
      }
    }
  }

  insertAfter(goesAfterThis, newData) {
    let currentNode = this.head;
    while(currentNode.next !== null) {
      if(currentNode.data === goesAfterThis) {
        console.log(currentNode);
        let newNode = new Node(newData);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }        
      else {
        currentNode = currentNode.next;
      }
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  getKthFromEnd(lastNum) {
    let first = this.head;
    let last = this.head;
    for (let i = 0; i < lastNum; i++) {
      first = first.next;
    }
    while(first.next) {
      first = first.next;
      last = last.next;
    }
    return last.data;
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
      return 'Error calling ';
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