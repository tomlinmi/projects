const author = {
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    birthday: "1946-10-19",
  };

//destructure all the keys in this object

const {name} = author
const firstName = name.firstName;
const surname = name.surname;
const {birthday} = author
console.log(firstName);
console.log(surname);
// using the rest operator ...
const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
  ];

const [first, second, ...otherGenres] = genres;
console.log(first); //> 'Fantasy'
console.log(second); //> 'Fiction'
console.log(otherGenres); //> [ 'Nonfiction', 'Science Fiction', 'Young Adult' ]

/*
//another example destructing the first, second and third values from the array
const authors = [
    "Ursula K. Le Guin",
    "Brandon Sanderson",
    "Terry Pratchett",
    "Neil Gaiman",
    "J. R. R. Tolkien",
  ];
  const [first, second, third] =authors;
  console.log(first);
  console.log(second);
  console.log(third);
  */