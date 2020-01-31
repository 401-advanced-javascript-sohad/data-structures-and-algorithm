'use strict';

var fibonacciNumbers = require('../fibonacci.js');

describe('fibonacciNumbers', () => {
  it ('has seed values', () => { 
    const seedValues = [0, 1];
    const result = fibonacciNumbers(0);
    expect(result).toEqual(seedValues);
  });


  it ('returns fibonacci numbers to the nth number', () => {

    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const number = 10;

    
    const result = fibonacciNumbers(number);
    expect(result).toEqual(sequence);
  });
});