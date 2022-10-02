function validateZip(req, res, next) {
  const zip = req.params.zip;
  if (zip.length !== 5) {
   res.send(`Zip (${zip}) is invalid!`)
  }
  
  if (isNaN(zip)) {
    console.log({zip})
   res.send(`Zip (${zip}) is invalid!`)
  }
 next()
  
}

 

module.exports = validateZip;