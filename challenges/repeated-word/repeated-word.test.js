'use strict';

const RepeatedWord = require('./repeated-word.js');

describe('repeated word challenge test', () => {
  
  
  test('return duplicate word successfully', () => {
      
    expect(RepeatedWord('Hi my name is sohad sohad qtaitat')).toEqual('sohad');
  });
  test('when given an empty string returns undefined ', () => {

    expect(RepeatedWord('')).toEqual(undefined);
  });


  test('when given something other than a string returns undefined ', () => {
    expect(RepeatedWord(12345)).toEqual(undefined);
  });


  test('if there are no duplicate words returns undefined ', () => {
    expect(RepeatedWord('sohad qtaitat ltuc student')).toEqual(undefined);
  });
});