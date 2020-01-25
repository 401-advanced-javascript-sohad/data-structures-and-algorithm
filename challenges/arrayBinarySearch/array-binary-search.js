'use strict';

let codeChallange = module.exports = {};



codeChallange.BinarySearch = function(arr,val){

    let idx = 0;

  let valArr = [];


  for(let i=0; i<arr.length; i++){


    if(arr[i] === val){
    
        valArr[idx] = i;
    
        idx++;
    }
  }
  
  
  
  if(idx===1){
  
    return valArr[0];
  
}if(idx>1){
    return valArr;
  }

  else{
    return -1;
  }

};