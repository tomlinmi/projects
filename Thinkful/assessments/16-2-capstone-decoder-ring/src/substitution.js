// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const sub ={'A':"X",'B':"O", 'C':"Y",'D':"Q",'E':"M",'F':"C",'G':"G",'H':"R",'I':'U', 'J':"K", 'K':"S",'L':"W",'M':"A",'N':"F",'O':"L",'P':"N",'Q':"T",'R':"H",'S':"D",'T':"J", 'U':"P", 'V':"Z",'W':"I",'X':"B",'Y':"E",'Z':"V"}
  
function substitution(input, alphabet, encode = true) {
const alphaKey = "abcdefghijklmnopqrstuvwxyz";  
    
 //helper function to validate the alphabet to check for lengths.
const validAlphabet=(alphabet)=> { 
  if(alphabet.length !==26) 
    throw new Error('error'); 
  for(let i=0;i<alphabet.length;i++){ 
    for(let j=i+1;j<alphabet.length;j++){ 
      if(alphabet[i]===alphabet[j]){ 
        throw new Error('error'); 
      } } } }
// function to map with corresponding key to desired key
function mapTo(input, fromKey, toKey) { 
  if (input.match(/\s/)) return input; 
  const index = fromKey.indexOf(input); 
  if (index === -1) 
    throw new Error(`error`); return toKey[index]; }
  
  
//try catch to handle the function output
  try {
    validAlphabet(alphabet);
    const codeKey = alphabet.toLowerCase().split("");
      return input
        .toLowerCase()  
        .split("")  
        .map(
          (word) =>
            encode
              ? mapTo(word, alphaKey, codeKey)  
              : mapTo(word, codeKey, alphaKey) 
        )
        .join("");  
    }
    catch (errr)
      {
        return false;
      }
    
    }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };