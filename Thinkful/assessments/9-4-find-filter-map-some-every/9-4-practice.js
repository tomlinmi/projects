//practice dataset, example code in notes

const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];



//use the every() function to write code that returns whether or not every park has a rating between 4.2 and 4.6.
const result = parks.every((park) => (park.rating >4.2 && park.rating <4.6));
console.log(result); // false