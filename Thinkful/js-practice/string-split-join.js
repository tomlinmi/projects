/*
const title = "Guards! Guards!";
title.split("!"); //(3)['Guards', ' Guards', '']> ?
console.log(title.split("!"));
title.split(""); //>(15) ['G', 'u', 'a', 'r', 'd', 's', '!', ' ', 'G', 'u', 'a', 'r', 'd', 's', '!'] ?

title.split("guards"); //>(1) ['Guards! Guards!'] ?
console.log(title.split("guard"));
*/



const titleArr = ["The", "Light", "Fantastic"];
titleArr.join("-"); //>The-Light-Fantastic ?
console.log(titleArr.join("-"));
titleArr.join("_-_"); //>The_-_Light_-_Fantastic ?
console.log(titleArr.join("_-_"));
titleArr.join(); //> The,Light,Fantastic?
console.log(titleArr.join());