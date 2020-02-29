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

// const quickSort = require('../quickSort.js');


// describe('QuickSort Module', ()=>{
//   it('Should return a sorted array if the input is Reverse-sorted',()=>{
//     let arr = [20,18,12,8,5,-2];
//     expect(quickSort(arr,0,arr.length - 1)).toEqual([-2,5,8,12,18,20]);
//   });
//   it('Should return a sorted array if the input is Few uniques',()=>{
//     let arr = [5,12,7,5,5,7];

//     expect(quickSort(arr,0,arr.length - 1)).toEqual([5,5,5,7,7,12]);

//   });
//   it('Should return a sorted array if the input is Nearly-sorted',()=>{
//     let arr = [2,3,5,7,13,11];

//     expect(quickSort(arr,0,arr.length - 1)).toEqual([2,3,5,7,11,13]);
//   });
// });