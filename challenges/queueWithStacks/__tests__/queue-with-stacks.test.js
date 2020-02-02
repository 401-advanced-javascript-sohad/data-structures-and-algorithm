'use strict';

const myQueue = require('../queue-with-stacks');

describe('testing queue', () => {
  test('performing an enqueue 5x should leave the 2nd value, postion 1, as 4.', () => {
    const testQueue = myQueue;
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3); 
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    expect(testQueue.stackA.stack[1]).toEqual(4);
  });


  test(' dequeue once move stackA (LIFO) to stackB (FIFO) & pop first value.', () => {
    const testQueue = myQueue;
    testQueue.enqueue(1); 
    testQueue.enqueue(2);
    testQueue.enqueue(3); 
    testQueue.enqueue(4);
    testQueue.enqueue(5); 
    testQueue.dequeue();
    expect(testQueue.stackB.stack[0]).toEqual(2);
  });


  test('enqueue, dequeue, and clearQueue -- should return 0 length', () => {
    const testQueue = myQueue;
    testQueue.enqueue(1); 
    testQueue.enqueue(2);
    testQueue.enqueue(3); 
    testQueue.enqueue(4);
    testQueue.enqueue(5); 
    testQueue.dequeue();
    testQueue.clearQueue();
    expect(testQueue.stackB.stack.length).toEqual(0);
  });
});