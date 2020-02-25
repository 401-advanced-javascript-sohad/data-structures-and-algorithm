'use strict';
const quickSort = require('./quick-sort.js');


describe(`insertion sort`, () => {
      
  it('Can sort an array successfully', () => {

    const inputArr = [2,4,1,5,7,9,10];
    
    expect(quickSort(inputArr, 0, inputArr.length-1)).toEqual([1,2,4,5,7,9,10]);
  });



  it('can sort duplicate values array successfully ', () => {
  
    const inputArr = [2,4,1,5,2,1];
  
    expect(quickSort(inputArr, 0, inputArr.length-1)).toEqual([1,1,2,2,4,5]);
  });



  it('Can sort an array that is in reverse successfully', () => {
  
    const inputArr = [10,9,8,7,6,5,4,3,2,1];
  
    expect(quickSort(inputArr, 0, inputArr.length-1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });


});