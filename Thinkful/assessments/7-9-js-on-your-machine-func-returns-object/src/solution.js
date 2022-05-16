/*
  The `faker` package has already been installed. 
  
  Require the `faker` package at the top of this file. Make sure to assign it to a variable named `faker`.
  
  Use the `faker` package inside of the `plantGenerator()` function.
  
  For the `name` property, return a string value using any method from `faker` that you want. 
  
  For the `color` property, return a string value using one of the available color methods from `faker`.

  `plantGenerator` should return a different `name` and `color` combination each time it is called.
  
  Finally, export `plantGenerator` as a function.
*/
 
let faker = require("faker");

function plantGenerator() {
//set value for methods 
  let randomName = faker.name.findName();
  let randomColor = faker.commerce.color();
  
  //return the function properties with values from the faker methods
  return {
   //return and object
    //name: "daylily",
   // color: "green",
   name:randomName,
   color:randomColor
  };
};


// Export `function as a function`
module.exports = plantGenerator;