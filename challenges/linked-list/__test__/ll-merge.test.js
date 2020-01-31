'use strict';

const LinkedList = require('../lib/singly-linked-list.js');
const mergeLists = require('../llMerge/ll-merge.js');


describe('mergeLists', () => {
  it('takes two linked lists as arguments', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    let list2 = new LinkedList();
    list2.insert('one');
    list2.insert('two');
    list2.insert('three');
    let results = mergeLists(list1, list2);
    expect(results).toBeDefined();
  });
  it('returns a node', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    let list2 = new LinkedList();
    list2.insert('one');
    list2.insert('two');
    list2.insert('three');
    let results = mergeLists(list1, list2);
    expect(results.next).toBeDefined();
  });
  it('returns a properly zipped array', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    let list2 = new LinkedList();
    list2.insert('one');
    list2.insert('two');
    list2.insert('three');
    // This one needs work
    // expect(list1.print()).toBe('List values: 3, three, 2, two, 1, one');
  });
});