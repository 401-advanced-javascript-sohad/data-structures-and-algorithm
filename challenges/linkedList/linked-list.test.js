'use strict';

const shiftArray = require('./linked-list');

describe('testing module', () => {
  it('the array first value', () => {
    let expected = null;
    let result = shiftArray.insertShiftArray(4, 4);
    expect(result).toEqual(expected);
  });

  ///////////////////////////////////////////////////////////////////////

  it('defaults to empty array and 0', () => {
    let expected = [0];
    let result = shiftArray.insertShiftArray();
    expect(result).toEqual(expected);
  });

  ///////////////////////////////////////////////////////////////////////


  it('inserts the second parameter in the middle of array', () => {
    let expected = [2,4,5,6,8];
    let result = shiftArray.insertShiftArray([2,4,6,8], 5);
    expect(result).toEqual(expected);
  })
})