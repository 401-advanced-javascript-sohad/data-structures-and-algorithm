'use strict';

const codeChallange = require('./array-binary-search');



describe('tests code challange 3', ()=>{
  it('return index of value if found in array', ()=>{
    let arr = [4,8,15,16,23,42];
    let val = 15;
    let expected = 2;
    let result = codeChallange.BinarySearch(arr,val);
    expect(result).toEqual(expected);
  });


  //////////////////////////////////////////////////////////

  it('return -1 if value is not found ', ()=>{
    let arr = [11,22,33,44,55,66,77];
    let val = 90;
    let expected = -1;
    let result = codeChallange.BinarySearch(arr,val);
    expect(result).toEqual(expected);
  });

  ////////////////////////////////////////////////////////////

  it('return array if value is in array multipule times', ()=>{
    let arr = [11,22,33,22,55,66,77];
    let val = 22;
    let expected = [1,3];
    let result = codeChallange.BinarySearch(arr,val);
    expect(result).toEqual(expected);
  });
});