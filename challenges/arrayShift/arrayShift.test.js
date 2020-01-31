'use strict';

const shiftArray = require('./array-shift');

describe('testing module', () => {
  it('should be array as the first value', () => {
    let expected = null;
    let result = shiftArray.insertShiftArray(4, 4);
    expect(result).toEqual(expected);
  });



  it('the defult empty array and 0', () => {
    let expected = [0];
    let result = shiftArray.insertShiftArray();
    expect(result).toEqual(expected);
  });

  it('inserts second parameter in middle of the array', () => {
    let expected = [5,10,15,20,25];
    let result = shiftArray.insertShiftArray([5,10,20,25], 15);
    expect(result).toEqual(expected);
  });
});