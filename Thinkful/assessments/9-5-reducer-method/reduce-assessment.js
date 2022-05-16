/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

const parks = [
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];

function squareKmTotal(parks) {
    //Add up all of the areaInSquareKm values from each park object., initial value for total is 0
    
    let result = parks.reduce((total, park)=>total + park.areaInSquareKm,0);
   
    return result; 
  }
  
  function parkNameAndState(parks) {
    //Return an object where each key is the name of a park and each value is the state that park is in.
  const parkNameAndStateObject = parks.reduce((result, park)=>{
    result[park.name]=park.location.state;
    return result;}, {});
    
    return parkNameAndStateObject
  }
  
  function parkByState(parks) {
   //Return an object where each key is the state and each value is an array of each park object associated with that state. 
   const parkByStateObject = parks.reduce((result,park)=>{
      let state = park.location.state;
      if (result[state] == null) {
        result[state] = [];
      }
      result[state].push(park);
      return result;
    },{});
    return parkByStateObject
  }
                                          
  module.exports = { squareKmTotal, parkNameAndState, parkByState };
  