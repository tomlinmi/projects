/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/
//This function takes in an array of parks and a specific state and returns all the parks that are in that state.
function getParksByState(parks, state) {
  
  const result = parks.filter((park)=>park.location.state===state);
  return result
}

//This function takes in an array of parks, all users, and a username. It then returns an array of park objects related to the wishlist of the user with that username. Each number in the wishlist refers to the id of one of the parks.

function getWishlistParksForUser(parks, users, username) {
  const userWishList = parks.filter((park)=> park.id==username.wishlist);
  return userWishList
    } 
// This function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.

function userHasVisitedAllParksInState(parks, users, state, username) {
  const stateMatchs=parks.every((park)=>park.state===state)
  return stateMatchs
  const userVisited=stateMatchs.every((stateMatch)=>stateMatch.id===users.visited);
  return userVisited  
}
//This function takes in the list of users and two usernames. If the first user has visited any of the parks represented by the second user's wish list, return true. Otherwise, return false.

function userHasVisitedParkOnWishlist( users, username1, username2) {
  Object.values(users)
  return users
  const userVisitMatch =users.some((user)=>username1.visited===username2.wishlist);
  return userVisitMatch
  
}
//This function returns all the usernames who have visited any park on the given user's wish list
function getUsersForUserWishlist(users, username) {
  
 const userVisitedWish = users.find((user)=>users.visited===users.wishlist);
  return userVisitedWish
  
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
