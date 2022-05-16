
//Write a method sortWords that takes in an array of strings, and returns an array with those strings, sorted alphabetically
function sortWords(words) {
words.sort((wordA, wordB)=>
wordA.toLowerCase() < wordB.toLowerCase()? -1:1);
  return words;
 }


//Write a method sortNumbers that takes in an array of numbers, and returns the numbers, sorted least to greatest.
function sortNumbers(numbers) {
numbers.sort((numberA, numberB)=> numberA-numberB);
  return numbers;
}

//Write a method largestFirst that takes in an array of numbers, and returns the numbers, sorted greatest to least - the reverse of the previous function.

function largestFirst(numbers) {
  numbers.sort((numberA, numberB)=> numberB-numberA);
  return numbers;
}
//Write a function sortFlowersByZone that takes in an array of flower objects, and sorts them by their hardinessZone.
function sortFlowersByZone(flowers) {
flowers.sort((flowerA, flowerB) => (flowerA.zone > flowerB.zone ? 1 : -1));
return flowers
}

//Write a function sortByLength that takes in an array of strings, and returns the strings, sorted by length, shortest first.

function sortByLength(strings) {
strings.sort((stringA, stringB)=>(stringA.length >stringB.length ? 1:-1));
  return strings
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};