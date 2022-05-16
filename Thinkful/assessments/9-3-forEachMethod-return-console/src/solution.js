function printNames(names) {
  // your solution here
  names.forEach((names) => console.log(names));
}

function logTreeType(trees) {
  // your solution here
   trees.forEach((trees) => console.log(trees.type));
}

function totalPoints(points) {
  // your solution here
let total =0

  points.forEach((points)=> {
  return total += points
  })
 return total  
}


function buildSentence(words) {
  // your solution here
  let sentence="";
  words.forEach(word =>{ sentence = words.join(" ")+" "})
  return sentence;
}


function logPercentages(decimals) {
  // your solution here
decimals.forEach((decimal)=> console.log(decimal*100 +"%"))
  
}
                 
          

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};

