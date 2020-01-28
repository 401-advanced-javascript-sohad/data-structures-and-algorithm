'use strict';

const list = require('../linked-list.js');

let list1 = new list.LinkedList();
let list2 = new list.LinkedList();

// list1.insert(10);
// list1.append(15);
// // list1.append(3);  

// list2.insert(4);
// list2.append(5);
// list2.append(6);



function mergeList(list1, list2){
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  let mergerList = new list.LinkedList();

console.log("p11111111111111111111111111111", pointer1)
console.log("p111222222222222222222222222222211", pointer2)

  while(pointer1 || pointer2){
    if(pointer1){

      mergerList.append(pointer1.value);
      
      pointer1 = pointer1.next;
    }

    if(pointer2){
      
      mergerList.append(pointer2.value);
      
      pointer2 = pointer2.next;
    }
  }





  // console.log(mergerList.head);
  // return mergerList.head;

}

mergeList(list1, list2);

module.exports = mergeList; 