function shortTitle(title){
if (!title.includes(":"))return title;
let result = "";
for(let i=0; i<title.length; i++) {
const character = title[i];
if (character !== ":"){

    result += character;
}
else {
    break;
}
}
return result;
}

const title= "Bad Omens: The Nice and Accurate Prophcies of Annes Nutter, Witch";
const shortened = shortTitle(title);
console.log(shortened);