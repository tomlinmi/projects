import React from "react";
import{ Link, Route, Switch} from "react-router-dom";
import User from "../user/User";
import PostList from "../user/PostList";

/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
*/

export const Card = ({ user = { posts: [] } }) => (

  
  <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
    <div className="border p-4 h-100 d-flex flex-column">
      <h2 className="font-weight-lighter flex-fill">
    <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>
       <Route path={`/users/:${user.id}`}> 
         <User user={user}/> 
      </Route> 
      <Link className="mt-2" to={`/users/${user.id}/posts`}>{user.posts.length} Posts »</Link> 
      <Route path={`/users/${user.id}/posts`}> <PostList /> </Route> 
      
    </div>
  </article>
);

export default Card;




