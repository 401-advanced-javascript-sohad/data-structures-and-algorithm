'use strict';

const SinglyLinkedList = require('./lib/singly-linked-list.js');

let list = new SinglyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
console.log(list.getKthFromEnd(2));
console.log(list.getKthFromEnd(7));