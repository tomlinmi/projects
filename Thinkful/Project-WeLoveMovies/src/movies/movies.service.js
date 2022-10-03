const knex = require("../db/connection");
/*
function list() {
    return knex("movies").select("*");
  }
*/

// update list to where movie is showing

function list(){
return knex("movies as m")
.join("movies_theaters as m_t", "m.movie_id", "m_t.movie_id")
.select("m.*")
.where({"m_t.is_showing": true})
.groupBy("m.movie_id")
}

//read record for movieId. use first method to return first record

function read(movieId){
return knex ("movies as m")
.select("m.*")
.where ({movie_id:movieId})
.first();
}
//list of theaters the movie is playing in

function theatersList(movieId){
return knex("movies as m")
.join("movies_theaters as m_t", "m.movie_id", "m_t.movie_id")
.join("theaters as t", "t.theater_id", "m_t.theater_id")
.select(
    "t.theater_id", 
    "t.name",
    "t.address_line_1",
    "t.address_line_2",
    "t.city",
    "t.state",
    "t.zip",
    "t.created_at",
    "t.updated_at",
    "m_t.is_showing",
    "movie_id")
.where ({movie_id:movieId})
.groupBy("t.theater_id")
}

function reviewsList(movieId){
return knex("movies as m")
.join("reviews as r", "m.movie_id", "r.movie_id")
.join("critics as c", "c.critic_id", "r.movie_id")
.select(
    "r.review_id",
    "r.content",
    "r.score",
    "r.created_at",
    "r.updated_at",
    "r.critic_id",
    "r.movie_id",
    "c.critic_id",
    "c.preferred_name",
    "c.surname",
    "c.organization_name",
    "c.created_at",
    "c.updated_at")
.where ({movie_id:movieId})
.groupBy("r.review_id")  
 }
    


module.exports = {
  list,
  read,
  theatersList,
  reviewsList,
};
