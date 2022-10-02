const controller = require("../notes/notes.controller");
const ratings = require("../data/ratings-data");



function list(req, res) { 
  const { noteId } = req.params; 
  byResult = noteId ? rating => Number(rating.noteId) === Number(noteId) : () => true;
 res.json({ data: ratings.filter(byResult) });
}


function ratingExists(req, res, next) {
  const  ratingId  = Number(req.params.ratingId);
  const foundRating = ratings.find(rating => rating.id === ratingId);
  if (foundRating) {
    res.locals.rating = foundRating;
    return next();
  }
  next({
    status: 404,
    message: `Rating id not found: ${ratingId}`,
  });
};


function read(req, res, next) {
  res.json({ data: res.locals.rating });
};

module.exports = {
  list,
  read: [ratingExists, read],
  ratingExists,
};