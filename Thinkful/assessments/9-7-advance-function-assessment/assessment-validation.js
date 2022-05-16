
const parks = [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    },
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      id: 3,
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];

  const users = {
    "karah.branch3": {
      visited: [2],
      wishlist: [1, 3],
    },
    "dwayne.m55": {
      visited: [2, 3],
      wishlist: [1],
    },
  };

  
  function getWishlistParksForUser(parks, users, username) {
      parks.forEach((park)=>park.id===username.wishlist)
   let wishMet = [];
   wishMet.push(park)
   // return wishMet
  
}
console.log(getUsersForUserWishlist(parks, users, "karah.branch3"));  
console.log(JSON.stringify(wishMet))
     