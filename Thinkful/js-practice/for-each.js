let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];
  
  /** Uncomment each section one at a time to run and test out the code snippets separately **/
  
  /** SECTION 1: USING A REGULAR FOR LOOP **/
  
 //  for (let i = 0; i < parks.length; i++) {
  //   console.log(parks[i].name);
// }


  /** SECTION 2: USING logPark() **/
/*  
 const logPark = (park) => console.log(park.name);
  for (let i = 0; i < parks.length; i++) {
     logPark(parks[i]);
  }
 */ 
  /** SECTION 3: USING forEach() **/
  
parks.forEach((park) => console.log(park.name));
  //OR
 // parks.forEach(logPark);

// parks.forEach((element) => {
 //   console.log(element.name);
 // });

  //parks.forEach((park, index, collection) => {
   // console.log(`(${index + 1}/${collection.length}) ${park.name}`);
 // });
  // (1/4) Biscayne
  // (2/4) Grand Canyon
  // (3/4) Gateway Arch
  // (4/4) Indiana Dunes