'use strict';
let Animal = require('../fifo-animal-shelter.js').Animal;
let AnimalShelter = require('../fifo-animal-shelter.js').AnimalShelter;

let test = new AnimalShelter('cat');

describe ('Animal Shelter Module', () =>{

  it('initiate with a cat or a dog', ()=>{
    expect(test.head.type).toEqual('cat');
  });

  it('create an empty Shelter with an input other than cat or dog', () =>{
    let testTwo= new AnimalShelter('lizard');
    expect(testTwo.head).toEqual(null);
  });

  it('Enqueue a dog', () => {
    test.enqueue('dog');
    expect(test.tail.type).toEqual('dog');
  });

  it(' Enqueue a cat', () => {
    test.enqueue('cat');
    expect(test.tail.type).toEqual('cat');
  });

  it(' not enqueue improper animal', () => {
    let testTemp = test.tail.type;
    test.enqueue('lizard');
    expect(test.tail.type).toEqual(testTemp);
  });

  it(' return null for dequeueing an improper input', () =>{
    expect(test.dequeue('lizard')).toEqual(null);
  });

  test.enqueue('dog');
  test.enqueue('cat');
  test.enqueue('dog');

  it('will dequeue from head', () =>{
    let catTest=test.dequeue('cat');
    expect(catTest).toEqual('cat');
    expect(test.head.type).toEqual('dog');
  });


  it(' dequeue from farther back',() =>{
    let catTest = test.dequeue('cat');
    expect(catTest).toEqual('cat');
    expect(test.head.type).toEqual('dog');
  });

});