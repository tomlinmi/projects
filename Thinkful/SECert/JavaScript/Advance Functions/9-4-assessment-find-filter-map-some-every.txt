/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  const parks =[
    {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {state: "Maine"},
  },
   {
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: {state: "Utah"},
  },
   {
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: {state: "Oregon"},
  },
   {
    name: "Zion",
    areaInSquareKm: 595.9,
    location: {state: "Utah"},
  },
];
*/
//Use the find() method to return the object of the park with the matching name. Otherwise, the function should return null.
function findParkByName(parks, name) {
const found = parks.find((park)=>park.name ===name);
  return found; 
}

//Use the every() method to return true if all parks are greater than the given size. Otherwise, return false.
function allParksAboveCertainSize(parks, minSize) {
  const result =parks.every((park)=>park.areaInSquareKm >= minSize);
  return result
}

//Use the filter() and the map() method to return the names of all parks with a size greater than or equal to the given size.
function getBigParkNames(parks, minSize) {
  //list of parks that are >=minSize
  const result = parks.filter((park)=>park.areaInSquareKm >=minSize);
  //map the array 'result' to new array to return name
  const newResult =result.map((park)=>park.name);
  return newResult
}

function doesStateHaveOneBigPark(parks, minSize, state) {
 // Use the filter() and the some() method to return true if any park from the given state has a size greater than or equal to the given size. Otherwise, return false.
  //list of parks that location === state
  const result = parks.filter((park)=>park.location.state === state);
  //taken array of result, return the parks that fit the criterion >= min Size
  const newResult = result.some((park)=>park.areaInSquareKm >=minSize);
  return newResult;
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
