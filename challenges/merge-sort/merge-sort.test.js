const mergeSort = require('./merge-sort');

describe('Merge sort', () => {
  it('sort the given array ', () => {

    const arr = [5, 17, 4];

    expect(mergeSort(arr)).toEqual([5, 17, 9]);
  });
});