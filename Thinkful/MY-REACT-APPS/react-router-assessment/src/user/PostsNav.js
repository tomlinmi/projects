import React from "react";
import { Link, Route, NavLink} from "react-router-dom";

import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";


// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to = "/">
          Go Home
        </Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
