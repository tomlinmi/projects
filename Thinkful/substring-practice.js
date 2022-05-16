/*const title = "Guards! Guards!";
title.substr(3);
console.log(title.substr(3))
title.substr(6,4);
console.log(title.substr(6,4))
title.substr(25);
console.log(title.substr(25)) */


function sentenceCase(sentence) {
    const first = sentence.substr(0, 1);
    const rest = sentence.substr(1);
  
    return first.toUpperCase() + rest.toLowerCase();
  }



const title = "the light FANTASTIC";

function titleize(title) {
    const words = title.split(" ");
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const capitalized = sentenceCase(words[i]);
      result.push(capitalized);
    }
  
    return result.join(" ");
  }
  
  titleize(title); //> "The Light Fantastic"
  console.log(titleize(title));