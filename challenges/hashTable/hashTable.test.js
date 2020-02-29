'use strict';

const HashMap = require('./hashTable.js');

describe('Hash Table',()=>{

  it('add hashtable key results in the value ',()=>{

    let hashMap = new HashMap(1024);
    hashMap.add('name','sohad');
    hashMap.storage.forEach(item=>{
      expect(item.head.data.key).toEqual('name');
      expect(item.head.data.value).toEqual('sohad');
    });

  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it('Retriev based on a key returns the stored value',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('age',24);
    hashMap.storage.forEach(item=>{
      expect(item.head.data.key).toEqual('age');
      expect(item.head.data.value).toEqual(24);
    });
  });
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


  it('returns null for a key that does not exist in hashtable successfully',()=>{

    let hashMap = new HashMap(1024);
    hashMap.add('age',24);
    expect(hashMap.contain('hoppies')).toBeNull();
    expect(hashMap.contain('cool')).toBeNull();
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


  it('handle a collision with the hashtable successfully',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('listen','sohad');
    hashMap.add('silent','hello');
    let hashedKey = hashMap.hash('listen');
    expect(hashMap.storage[hashedKey].head.next.data.key).toBeDefined();
    expect(hashMap.storage[hashedKey].head.next.data.value).toBeDefined();
    expect(hashMap.storage[hashedKey].head.data.key).toBeDefined();
    expect(hashMap.storage[hashedKey].head.data.value).toBeDefined();
  });
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


  it('retrieve a value in the hashtable that has a collision successfully',()=>{

    
    let hashMap = new HashMap(1024);
    hashMap.add('listen','sohad');
    hashMap.add('silent','hello');
    let hashedKey = hashMap.hash('listen');
    expect(hashMap.storage[hashedKey].head.next.data.key).toEqual('listen');
    expect(hashMap.storage[hashedKey].head.next.data.value).toEqual('sohad');
    expect(hashMap.storage[hashedKey].head.data.key).toEqual('silent');
    expect(hashMap.storage[hashedKey].head.data.value).toEqual('hello');
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it('Successfully hash a key to an in-range value',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('listen','sohad');
    hashMap.add('silent','hello');
    let hashedKey = hashMap.hash('listen');
    expect(hashedKey).toEqual(157);
    expect(typeof hashedKey).toBe('number');
  });

});