'use strict';

const leftJoin = require('./left-join.js');

const table1 = {'sohad': 'ltuc','qtaitat': 'codeFellows','malkah': 'soso'};
const table2 = {'sohad': 'qtaitat','malkah': 'aha','left': 'right'};




describe('Sohad Left Join Challenge 33 ', () => {
  
  it('returns an array :) :) ;) ', () => {
    expect(leftJoin(table1, table2)).toBeInstanceOf(Array);
  });



  it('the array contains nested arrays', () => {
    const output = leftJoin(table1, table2);
    output.forEach(element => {
      expect(element).toBeInstanceOf(Array);
    });
  });



  it('adds the keys of the first tree as the first items in the array', () => {
    const output = leftJoin(table1, table2);
    expect(output[0][0]).toEqual('sohad');
    expect(output[1][0]).toEqual('qtaitat');
    expect(output[2][0]).toEqual('malkah');
  });



  it('adds the value of the first tree as the second items in the array', () => {
    const output = leftJoin(table1, table2);
    expect(output[0][1]).toEqual('ltuc');
    expect(output[1][1]).toEqual('codeFellows');
    expect(output[2][1]).toEqual('soso');
  });



  it('add exists value of the second tree as the third items in the arrays', () => {
    const output = leftJoin(table1, table2);
    expect(output[0][2]).toEqual('qtaitat');
    expect(output[2][2]).toEqual('aha');
  });

});