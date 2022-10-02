console.log(document);
const heading = document.querySelector("h1");
console.log(heading);
//value is a direct child of stat
const value = document.querySelector(".stat .value");
console.log(value);

const button = document.querySelector(".rate-button");
console.log(button);

const area = document.querySelector(".stat .value");
console.log(area);

const div = document.querySelector("div");
console.log(div);

const hello = document.querySelector(".hello");
console.log(hello);

//return all matches
//find all the buttons on the page

const buttons = document.querySelectorAll("button");
console.log(buttons);

//get a list of all <h3> elements
const heading3List = document.querySelectorAll("h3");

//iterate over the list and print each one out
for(let element of heading3List.values()){
console.log(element);
}

//another way
/*
const heading3List = document.querySelectorAll("h3");

for (let i=0; i<heading3List.length; i++){
const element = heading3List[i];
console.log(element);
}
*/

//select all the descriptions on the page

const descripts = document.querySelectorAll(".description-display");
for (let desc of descripts.values()) {
    let content = desc.innerText;
    console.log(content);

}
//now use string methods to truncate these strings to 250 characters and add ellipses if they are longer than that.
/*const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + "...";
  }

  console.log(content);
}
*/

//update HTML element .innerText
/*
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    desc.innerText = content;
  }
  */

  //if you wanted the ellipses that you added above to be clickable? You can wrap an ellipsis in <a> tags to make it into a link. 

  const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
//innerHTML for browser to string as HTML
  desc.innerHTML = content;
}

//bold any rating value that is greater than 4.7.
//iterate through the list and get each actual rating value using the innerText property
//This returns a string value, but you want to work with the rating as a number. So, use the parseFloat() method to convert a string into a floating point number
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
      }
      console.log(ratingValue);
  }

  //create a new element with text
  //select the parks on the page using the park class as a selector:
  const parks = document.querySelectorAll(".park-display");


const numberParks=parks.length;
//creat a new element in this case use <div>
const newElement = document.createElement("div");

//set the text of this element with the innerText property, like this:
newElement.innerText = `${numberParks} exciting parks to visit`;
//use CSS rule to style (see header-statement) in CSS style

newElement.classList.add("header-statement");

//Finally, to add the new element to the DOM, select the <header> element and use the appendChild() method to add the new element to the <header>, as shown below.

const header = document.querySelector("header");
header.appendChild(newElement);
console.log(newElement);

//select a button on the page
const firstBtn = document.querySelector("button");
//event handler
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  // Select the `nameSorter` link
//const nameSorter = document.querySelector("#name-sorter");
/*
// Add an event listener, but for links prevent page from reloading by adding preventDefault method
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter");
  });
  */


  /*
  //fullpractice event handler and sort by name program

  nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";

// 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
 // 6. Insert each park into the DOM
 parksArray.forEach((park) => {
    main.appendChild(park);
  });

  });
*/

//program to sort by Ratings

 // Select the `ratingSorter` link
 const ratingSorter = document.querySelector("#rating-sorter");

 ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";

// 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector(".value").innerText;
    const parkBName = parkB.querySelector(".value").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
 // 6. Insert each park into the DOM
 parksArray.forEach((park) => {
    main.appendChild(park);
  });

  });

  console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");