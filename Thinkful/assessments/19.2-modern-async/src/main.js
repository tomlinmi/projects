const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

const body = { meaning: "Sails", name: "Vela", quadrant: "SQ2", starsWithPlanets: 7}

function updateIfExists(id, body) {
 /*const url = `${BASE_URL}/constellations/${id}`;
  axios
  .get(url)
   .then(({ data }) => {
        return data.id === id;
  })
  .then((exists)=>{
    if (!exists) return `Constellation "${data.id}" does not exists.`;
      return axios
        .put(url, body)
  .then(({ data }) =>{ return data
  })
  .catch(console.log);
  
} 
       )}*/
        
 
 const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then(() => {
      return axios.put(url, body).then(({ data }) => {
        return data;
      });
  })
    
    .catch((error) => {
    return error.message;
    });
}


module.exports = {
  updateIfExists,
};
