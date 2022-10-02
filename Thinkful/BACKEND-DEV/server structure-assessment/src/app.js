const express = require("express");
const app = express();

const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());



// validation functions
function noteExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    next()
  } else {
    next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`
    });  
  }
}



// New middleware function to validate the request body
function bodyHasTextProperty(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next(); // Call `next()` without an error message if the result exists
  }
  next({
    status: 400,
    message: "A 'text' property is required.",
  });
}


app.get("/notes/:noteId", 
    noteExists,
    (req, res) => {
      const noteId = Number(req.params.noteId);
      const foundNote = notes.find((note) => note.id === noteId);
      res.json({ data: foundNote });
});



app.get("/notes", (req, res) => {
  res.json({ data: notes });
});


let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

app.post("/notes", bodyHasTextProperty, (req, res) => {
  const { data: { text } = {} } = req.body;
    const newNote = {
      id: ++lastNoteId, // Increment last id then assign as the current ID
      text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  }
);

/*
// Not found handler
app.use((req, res, next) => {
res.status(404).send({ status: 404, error: `Not found: ${req.originalUrl}`, });
});

*/

// Not found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message:`Not found: ${req.originalUrl}`
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
 const {status = 500, message="Something went wrong"}=error; res.status(status).json({error:message});
});

module.exports = app;
