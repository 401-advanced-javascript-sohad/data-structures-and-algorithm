'use strict';

const leftJoin = (table1, table2) => {

  const output = [];
  Object.keys(table1).forEach(key => {
    const arr = [];
    arr.push(key, table1[key]);
    if(table2[key]) {
      arr.push(table2[key]);
    }
    else {
      arr.push(null);
    }
    output.push(arr);
  });
  return output;
};

module.exports = leftJoin;