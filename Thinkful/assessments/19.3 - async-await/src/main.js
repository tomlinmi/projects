const { welcome, goodbye, tell } = require("../utils/fortune-teller");
 //put async infront of the function to turn into a promise.  wrap the .thens into a try block
async function getFortune(question) {
   try {
     //create a constant to return the value of invoking the tell(question)function
  const response = await tell(question) //return response then execute the console.logs
         console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${response}`);
    }
    catch(err) {
       console.log(`There was an error: ${err}`);
    }
}
 //put async infront of the function to turn into a promise.  wrap the .thens into a try block
async function fullSession(question) {
  try {
const welcomeMessage = await welcome() //create variable to return the welcome message
    console.log(welcomeMessage) //log the welcome message
    await getFortune(question) //helper function from above, to response to question
  
 const goodbyeMessage = await goodbye()  //create variable to return the goodbye message
    console.log(goodbyeMessage) //log the goodbye message
  }
    catch(err) {
      console.log(`There was an error: ${err}`);
    };
}

module.exports = { getFortune, fullSession };
