const mergeSort = require('./merge-sort');

describe('Merge sort', () => {
  it('sort the given array ', () => {
    const arr = [3, 9, 4];

    expect(mergeSort(arr)).toEqual([3, 4, 9]);
  });
});