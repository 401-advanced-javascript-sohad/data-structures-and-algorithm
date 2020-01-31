'use strict';

const mergeLists = (list1, list2) => {
  let firstArray = list1.head;
  let secondArray = list2.head;

  while(firstArray && secondArray) {
    let next1 = firstArray.next;
    let next2 = secondArray.next;
    firstArray.next = secondArray;
    secondArray.next = next1 || secondArray.next;
    firstArray = next1;
    secondArray = next2;
  }

  return list1.head;
};

module.exports = mergeLists;