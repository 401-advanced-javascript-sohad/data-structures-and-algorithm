'use strict';

module.exports = function repeatedWord(str) {
  if (str === '') {
    return undefined;
  }
  if (typeof str === 'number' || typeof str !== 'string') {
    return undefined;
  }
  const splitString = str.split(' ');
  const strObject = new Map();
  for (let i = 0; i < splitString.length; i++) {
    if (strObject.get(splitString[i])) {
      return splitString[i];
    }
    strObject.set(splitString[i], true);
  }
  return undefined;
};