//require("fs" used to pull in useful file system methods in JS)
const fs = require("fs");

let quote = null;

console.log("Finding a quote...");
//fs readfile method
fs.readFile("quotes.txt", (error, buffer) => {
  if (error) {
    throw error;
   
  }
  const lines = buffer.toString().split("\n");
  quote = lines[Math.floor(Math.random() * lines.length)];
  console.log(`Your quote is: ${quote}`);
 
});


