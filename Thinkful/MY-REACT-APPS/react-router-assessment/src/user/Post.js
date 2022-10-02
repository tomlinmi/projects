import React from "react";
import { Route, Switch, useParams, useHistory } from "react-router-dom";
import { deletePost } from "../api";

import NoPostSelectedMessage from "./NoPostSelectedMessage";

import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";
import PostsNav from "./PostsNav";



export const Post = ({ posts }) => {
  const {postId} = useParams(); // TODO: This ID will need to be pulled from parameters.
  const history = useHistory();
  const post = posts.find((post) => post.id === Number(postId));

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
     return history.push ("/"); // TODO: After the post is deleted, send the user to the home page.
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>
        <Switch>
        <Route exact path = "/">
        </Route>
          </Switch>
      </article>
    );
  }
  return <NoPostSelectedMessage />;
};

export default Post;
