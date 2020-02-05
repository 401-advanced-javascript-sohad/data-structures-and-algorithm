function multiBracketValidation(string) {

  const output = [];
  
  const key = { '(': ')', '[': ']', '{': '}'};
    
    
  for(let i = 0; i < string.length; i++) {
  
    const openBracket = string[i] === '(' || string[i] === '{' || string[i] === '[';//openComparisons

    const closeBracket = string[i] === ')' || string[i] === '}' || string[i] === ']'; //closeComparisons
  
    if(openBracket) {
      output.push(string[i]);  
    } 
    else if(closeBracket) {
      const lastOpenBracket = output.pop();
  
      if(string[i] !== key[lastOpenBracket]) {
        return false;
      }
  
    }
  }
  
  if(output.length !== 0) {
    return false;
  }
  return true;
}
  
  
module.exports = multiBracketValidation;