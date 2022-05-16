let color = {name:"red", hex:"BF3100"};
let a = {color:color};
let b=a;
color.hex = "FF312E";
console.log(b); //{color:{name:"red", hex:"FF312E"}}

/*let a= [10]
b=a;
a.push(20)
console.log(b)*/