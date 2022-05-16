name: {
    firstName: "Terry",
    lastName: "Pratchett",
  },
  series: ["Discworld", "Long Earth"],
},
];


/*
function getAllSeries(authors) {
const result = [];
for (let i = 0; i < authors.length; i++) {
  for (let j = 0; j < authors[i].series.length; j++) {
    result.push(authors[i].series[j]);
  }
}
return result;
}
*/

function getAllSeries(authors) {
const result = [];
for (let i = 0; i < authors.length; i++) {
  const author = authors[i];
  for (let j = 0; j < author.series.length; j++) {
    result.push(author.series[j]);
  }
}
return result;
}

console.log(getAllSeries(authors));
//> [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]