
let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

  parks.forEach((park) => {
    console.log(park.name);
  });

  parks.forEach((park, index, collection) => {
    console.log(`(${index + 1}/${collection.length}) ${park.name}`);
  });