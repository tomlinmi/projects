//file to configure our Express application

const express = require("express");
const morgan = require("morgan");
const app = express();

// Application-level middleware
app.use(morgan("dev"));

// Route functions
const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const sayGoodbye = (req, res, next) => {
  res.send("Sorry to see you go!");
};

const saySomething = (req, res, next) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

// Routes
app.get("/hello", sayHello);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);

//Triggering the error handler
app.get("/states/:abbreviation", (req, res, next) => {
    const abbreviation = req.params.abbreviation;
    if (abbreviation.length !== 2) {
      next("State abbreviation is invalid.");
    } else {
      res.send(`${abbreviation} is a nice state, I'd like to visit.`);
    }
  });



// Not-found handler, A catch-all middleware function that is called whenever a nonexisting route is called.
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
  });


// Error handler, An error-handler middleware function that is called during an error (e.g., when the next() function is called with an argument). 
app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
  });



module.exports = app;
