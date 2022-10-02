const express = require("express")
//const morgan = require('morgan')


const getZoos = require("./utils/getZoos");
const validateZip = require('./middleware/validateZip')
const app = express()



//app.use(morgan('dev'))

app.get("/zoos/all",(req,res) => {
  const { admin } = req.query
  console.log({admin})
 /* if (admin === "true"){
    res.send(`All zoos: ${getZoos().join("; ")}`)
  }
  res.send("You do not have access to that route.")*/
})

app.get("/check/:zip",validateZip,(req,res) => {
  const zip = req.params.zip
  if (getZoos(zip)) {
    res.send(`${zip} exists in our records.`)
  } 
     res.send(`${zip} does not exist in our records.`)
})

app.get("/zoos/:zip", validateZip, (req,res) =>{
 const zip = req.params.zip
 //console.log(getZoos(zip))
const zoos = getZoos(zip)
 if (zoos && zoos.length){
    res.send(`${zip} zoos: ${zoos.join("; ")}`)
  } 
 res.send(`${zip} has no zoos.`) 
})

//Not Found
app.use((req,res,next) => {
  res.send("That route could not be found!")
})




module.exports = app