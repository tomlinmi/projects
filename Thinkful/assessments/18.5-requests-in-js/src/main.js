const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

//The getAllNames() function should make a GET request to /constellations. With the data that is returned, modify it so that you return an array that contains the names of each constellation. Use console.log() to print the names of the constellations.

function getAllNames() {
axios
  .get(`${BASE_URL}/constellations`)
  .then((response) => {
  const result = response.data.map((constellation)=> {
     return constellation.name
  });
  console.log(result);
})
  .catch((error) => {
    console.log(error.message);
  });
  
  
}

//The getConstellationsByQuadrant() function should make a GET request to /constellations. It should return all responses where the quadrant matches what was given. For example, if "SQ1" is provided as the quadrant, only those constellations should be passed into the console.log() statement.

function getConstellationsByQuadrant(quadrant) {
  axios
  .get(`${BASE_URL}/constellations`)
  .then((response) => {
 const foundQuadrant = response.data.filter((constellation)=> { 
   return constellation.quadrant === quadrant; })
         console.log(foundQuadrant);
  }) 
  .catch((error) => {
    console.log(error.message);  
  })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
