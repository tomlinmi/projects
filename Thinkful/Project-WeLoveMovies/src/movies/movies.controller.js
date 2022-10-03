const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

async function movieExists(req, res, next) {
    const { movieId } = req.params;
  
    const movie = await service.read(movieId);
    if (movie) {
      res.locals.movie = movie;
      return next();
    }
    return next({ status: 404, message: `Movie cannot be found.` });
  }

  async function read(req, res, next) {
    const knexInstance = req.app.get("db");
    const {movie } = res.locals;
    res.json({ data: movie });
  }

  async function listTheaters(req, res, next) {
  
    const resultArray = await service.theatersList();
    const newArray = resultArray.map((resultItem) => {
    return { 
        "theater_id": resultItem.theater_id, 
        "name": resultItem.name,
        "address_line_1": resultItem.adress_line_1,
        "adress_line_2": resultItem.address_line_2,
        "city": resultItem.city,
        "state": resultItem.state,
        "zip": resultItem.zip,
        "created_at": resultItem.created_at,
        "updated_at": resultItem.updated_at,
        "is_showing": resultItem.is_showing,
        "movie_id": resultItem.movie_id,
}
    });
     res.json({ data: newArray  });
    
    }
    
    async function listReviews(req, res, next) {
  
        const resultArray = await service.theatersList();
        const newArray = resultArray.map((resultItem) => {
        return { 
            "review_id": resultItem.review_id, 
            "content": resultItem.content,
            "score": resultItem.score,
            "created_at": resultItem.created_at,
            "updated_at": resultItem.updated_at,
            "critic_id": resultItem.critic_id,
            "movie_id": resultItem.movie_id,
            "critic_id": resultItem.critic_id,
            "preferred_name": resultItem.preferred_name,
            "surname": resultItem.surname,  
            "organization_name": resultItem.organization_name,
            "updated_at": resultItem.updated_at,
            "critic_id": resultItem.critic_id,
    }
        });
         res.json({ data: newArray  });
        
        }
    

module.exports = {
  list: asyncErrorBoundary(list),
  listTheaters: asyncErrorBoundary(listTheaters),
  listReviews:asyncErrorBoundary(listReviews),
  read: [asyncErrorBoundary(movieExists), read],

};