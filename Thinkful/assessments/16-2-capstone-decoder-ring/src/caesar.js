// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  function caesar(input, shift, encode = true) {
    // your solution code here
   
   if (!shift || shift === 0 || shift < -25 || shift > 25) { return false };
   //declare empty array to store results 
  let result = [];
//convert input string into an input array of letters with split method.
    input = input.toLowerCase().split('');
 //check if encode = false, if false multiply shift by -1 to convert negative value
    if (encode === false){
      shift= shift * (-1)}
 // loop thru every char of the input
input.forEach((char, index) => { 
  if (alphabet.includes(char)){ 
    alphabet.find((letter, index) => {
    if (char ===letter){ 
      let code =(index + shift) 
      if(code <0){ 
        code = code + 26} 
      if(code >25){ 
        code = code -26} 
      //get character in the alphabet array which is at index code 
      
      result.push(alphabet[code]) } 
    })
  }else{ result.push(char) 
        } 
})
    result = result.join(""); 
    return result;
  }
    
    return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };