const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

//Router level middleware to reduce duplication

const checkForAbbreviationLength = (req, res, next) => {
  const abbreviation = req.params.abbreviation;
  if (abbreviation.length !== 2) {
    next(`State ${abbreviation} is invalid.`);
  } else {
    next();
  }
};


app.get(
  "/states/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    res.send(`${req.params.abbreviation} is a nice state, I'd like to visit.`);
  }
);

app.get(
  "/travel/:abbreviation",
  checkForAbbreviationLength,
  (req, res, next) => {
    res.send(`Enjoy your trip to ${req.params.abbreviation}!`);
  }
);


/* Not needed
// Routes
app.get("/send/:message", (req, res, next) => {
  const message = req.params.message;
  if (message.length < 3) return next("Your message is too short!");
  res.send(`Your message: ${message}`);
});

*/

// Error Handling

app.use((req, res, next) => {
       res.send('An error occurred: Could not find route.');
  });


app.use((err, req, res, next) => {
    console.error(err);
    res.send(`An error occurred: ${err}`);
  });


module.exports = app;
