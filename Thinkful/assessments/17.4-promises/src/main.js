const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  //takes a string
  //use tell() function
  //return an array with both the question and answer
  //if no question provided, return error message
  return tell(question)
  .then(answer =>{
    let result =[]
    result.push(`Your question was: ${question}`)
    result.push(`Your fortune is: ${answer}`)
    return result
  })
  .catch(err => `There was an error: ${err}`)
}

function fullSession(question) {
  //welcome, tell, goodbye
  //return an array
  //if no question, return welcome, error, goodbye
  let result =[]
  welcome().then(res => result.push(res))
  return tell(question)
  .then(answer =>{
    result.push(`Your question was: ${question}`)
    result.push(`Your fortune is: ${answer}`)
    goodbye().then(res => result.push(res))
    return result
  })
  .catch(err =>{
    result.push(`There was an error: ${err}`)
    goodbye().then(res => result.push(res))
    return result
  })
}

module.exports = { getFortune, fullSession };
