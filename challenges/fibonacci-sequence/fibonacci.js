/**
 * @fileOverview fibonacciNumbers
 * @param {number} n Length 
 * @returns Fibonacci Sequence
 */
function fibonacciNumbers(n) {
  if (n === 0) {
    return [0, 1];
  }
  
  var s = fibonacciNumbers(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  
  return s;
}
  
module.exports = fibonacciNumbers;