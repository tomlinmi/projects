const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

/*const question = "Will the weather be nice today?";
const tellPromise = tell(question);
tellPromise.then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.error);
  
  //> Will the weather be nice today?
  //> Without a doubt.*/

  welcome()
  .then(console.log) // Logs the result of welcome()
  .then(goodbye) // Returns promise from goodbye()
  .then(console.log) // Logs the result of goodbye()
  .catch(console.error); // Logs error from welcome() or goodbye()