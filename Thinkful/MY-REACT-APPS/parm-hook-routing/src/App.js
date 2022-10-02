import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import NoMatch from "./NoMatch";
import "./App.css"; 

import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;