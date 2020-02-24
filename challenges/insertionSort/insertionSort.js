function insertion(array) {

  for (let i = 1; i < array.length; i++) {

    let j = i - 1;

    let temp = array[i];


    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = temp;
  }



  return array;
}
//   console.log('result',insertion(array))
module.exports = insertion;