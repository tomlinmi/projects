const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?";
const promise = tell(question);
promise
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.log);


  welcome()
  .then(console.log) // Logs the result of welcome()
  .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
  .then(console.log) // Skipped because tell returned a rejected promise.
  .catch(console.error) // Logs error from tell() or welcome()
  .then(goodbye) // Returns promise from goodbye()
  .then(console.log) // Logs the result from goodbye()
  .catch(console.error); // Logs error only from goodbye()