'use strict';

const mergeLists = (list1, list2) => {
  let cur1 = list1.head;
  let cur2 = list2.head;

  while(cur1 && cur2) {
    let next1 = cur1.next;
    let next2 = cur2.next;
    cur1.next = cur2;
    cur2.next = next1 || cur2.next;
    cur1 = next1;
    cur2 = next2;
  }

  return list1.head;
};
mergeLists ();
module.exports = mergeLists;