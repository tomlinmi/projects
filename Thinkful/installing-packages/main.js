
//import the moment package into this program
let moment = require("moment");
//using moment
moment().format(); 
console.log("The current date is: " +
moment().format("MMM-DD-YYYY, h:mm:ss a") );