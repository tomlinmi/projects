const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const leo = {
  name: "Leo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  .catch(console.log);
  
  /*A GET request is made to the constellationsUrl. If that request fails, the entire chain of then() calls is skipped, and the console.log() statement inside of catch() is called.

The data is searched through to see whether or not there is a matching name. The record that's found is returned, or undefined is returned.

If the constellation already exists, an error is thrown, skipping ahead to the catch(). If the constellation does not exist, a POST request is created and returned. If that request fails, the next catch() is called.

The results of the POST request are logged. Specifically, the data key is logged.*/