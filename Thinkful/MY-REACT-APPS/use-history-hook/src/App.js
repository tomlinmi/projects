import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  } from "react-router-dom";

import "./App.css"; 
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoJumpButton from "./GoJumpButton";
import GoHomeButton from "./GoHomeButton";



import UserProfile from "./UserProfile";


function App() {
  return (
       <Router>
        <BackButton/>
        <ForwardButton/>
        <GoJumpButton/>
        <GoHomeButton/>

    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(3)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      
      <Switch>
       <Route exact path="/user/new">
          <h1>Unable to create a new user</h1>
           </Route>
        
         <Route path="/user/:userId" >
           <UserProfile/>
           </Route>
        
        
        
         <Route>
          <h1>404 Not Found</h1>
          </Route>   
                
      </Switch>
    </div>
    </Router>
  );
}

export default App;