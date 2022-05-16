let parks = {
    "Biscayne": 4.2,
    "Grand Canyon": 5,
    "Gateway Arch": 4.5,
    "Indiana Dunes": 4.1,
  };

  
//get all the keys as an array, you can use the built-in JavaScript method Object.keys(), like this:

Object.keys(parks);
console.log(Object.keys(parks));

//With the keys as an array, you can use the array methods that you've learned, like this:

Object.keys(parks).filter((name) => {
    const rating = parks[name];
    return rating >= 4.5;
  }); // => ["Grand Canyon", "Gateway Arch"]

  //how do I print this back to console??