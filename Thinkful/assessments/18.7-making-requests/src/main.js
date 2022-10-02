const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
//The index() function should return all of the constellation resources.
function index() {
 axios
  .get(`${BASE_URL}/constellations`)
  .then((response) => {
  const result = response.data.map((constellation)=> {
     return constellation
  });
  console.log(result);
})
  .catch((error) => {
    console.log(error.message);
  }); 
}
//The create() function should take an object, body, and create a new constellation.
function create(body) {
  axios
  .post(`${BASE_URL}/constellations`, {
    name: "Triangulum",
    meaning: "Triangle",
    starsWithPlanets: 3,
    quadrant: "NQ1",
  })
  .then((response) => {
    console.log(response.data);
  });

}
//The show() function should take an id and return a constellation for the given constellation.
function show(id) {
  
axios.get(`${BASE_URL}/constellations/${id}`)
  .then((response)=>{
  console.log(response.data);
});
   
}
//The update() function should take an id and an object, body, and update the given constellation.
function update(id, body) {
    axios
  .put(`${BASE_URL}/constellations/${id}`, {
    id:"abc-def",
    name: "Triangulum",
    meaning: "the Triangle",
    starsWithPlanets: 3,
    quadrant: "NQ1",
  })
  .then((response) => {
    console.log(response.data);
  });
  
}
//The destroy() function should take an id destroy the given constellation
function destroy(id) {
 
 axios.delete("http://localhost:5000/constellations/abc-def") 
   .then((response)=>{
  console.log(response.data);
});
   
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
