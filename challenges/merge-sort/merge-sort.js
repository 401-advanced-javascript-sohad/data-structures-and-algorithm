const mergeSort = arr => {
  const n = arr.length;
  let newArr;
  
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    newArr = merge(left, right, arr);
  }
  return newArr;
};





const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;





  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k++;
  }



  
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      k += 1;
      j += 1;
    }
  } else {
    while(i < left.length) {
      arr[k] = left[i];
      k += 1;
      i += 1;
    }
  }
  return arr;
};

module.exports = mergeSort;