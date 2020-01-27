'use strict';

const list = require('./linked-list.js');
  describe('kFromEnd method', () => {
    it(' return the value of the node that is k from the end', () => {
      let newList = new list.LinkedList();
      newList.append('B Cat');
      newList.append('P Dog');
      newList.append('H Cat');
      newList.append('L Dog');
      newList.append('A Dog');
      newList.kFromEnd(2);
      expect(newList.kFromEnd(2)).toEqual('H Cat');
    });
  
  
  
    it('return k is too big  if k is greater than the length of the list', () => {
      let newList = new list.LinkedList();
      newList.append('B Cat');
      newList.append('P Dog');
      newList.append('H Cat');
      newList.append('L Dog');
      newList.append('A Dog');
      newList.kFromEnd(8);
      expect(newList.kFromEnd(8)).toEqual('k is too big');
    });  
    
    it('returns falsy if the k value is not a number', () => {
      let newList = new list.LinkedList();
      newList.append('B Cat');
      newList.append('P Dog');
      newList.append('H Cat');
      let result = newList.kFromEnd('hi');
      expect(result).toBeFalsy();
    });  
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    describe('Includes method', () => {
      it(' return true if a value is found in the list', () => {
        let newList = new list.LinkedList();
        newList.append('B Cat');
        newList.append('H Cat');
        newList.append('L Dog');
        newList.append('P Dog');
        expect(newList.includes('L Dog')).toBeTruthy();
      });
    
      it(' return false if a value is not found in the list', () => {
        let newList = new list.LinkedList();
        newList.append('B Cat');
        newList.append('H Cat');
        newList.append('L Dog');
        newList.append('P Dog');
        expect(newList.includes('Leo the Cat')).toBeFalsy();
      });
    
      it(' return true if multiple correct values are entered into the method arguements', () => {
        let newList = new list.LinkedList();
        newList.append('B Cat');
        newList.append('H Cat');
        newList.append('L Dog');
        newList.append('P Dog');
        expect(newList.includes('H Cat', 'L Dog')).toBeTruthy();
      });
    
      it(' return falsy if one or more correct values and one or more incorrect values are entered into the method arguements', () => {
        let newList = new list.LinkedList();
        newList.append('B Cat');
        newList.append('H Cat');
        newList.append('L Dog');
        newList.append('P Dog');
        expect(newList.includes('Hank the Dog', 'L Dog')).toBeFalsy();
      });
    
    });

  });  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    


describe('Insert method', () => {
  it('adds a new node to the beginning of the list when a value is provided', () => {
    let newList = new list.LinkedList();
    newList.insert('B Cat');
    expect(newList).toEqual({'head': {'next': null, 'value': 'B Cat'}});
  });  

  it('adds an empty node to the list if a value is not provided', () => {
    let newList = new list.LinkedList();
    newList.insert();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });  
  
  it('adds a multiple nodes to the list when multiple nodes are provided', () => {
    let newList = new list.LinkedList();
    newList.insert('B Cat');
    newList.insert('H Cat');
    console.log(newList);
    expect(newList.head.next.value).toEqual('B Cat');
  });  
});  






describe('Append method', () => {
  it('adds a new node to the end of the list when a value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('B Cat');
    expect(newList).toEqual({'head': {'next': null, 'value': 'B Cat'}});
  });


  it('adds a multiple nodes to the list when multiple nodes are provided', () => {
    let newList = new list.LinkedList();
    newList.append('B Cat');
    newList.append('H Cat');
    console.log(newList);
    expect(newList.head.next.value).toEqual('H Cat');
  });
});

describe('Insert Before method', () => {
  it('adds a new value before the specified value when a new value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('L Dog');
    newList.insertBefore('L Dog', 'B Cat');
    expect(newList.head.next.value).toEqual('B Cat');
  });
});


describe('Insert After method', () => {
  it('adds a new value after the specified value when a new value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('L Dog');
    newList.insertAfter('L Dog', 'B Cat');
    expect(newList.head.next.value).toEqual('B Cat');
  });
});

