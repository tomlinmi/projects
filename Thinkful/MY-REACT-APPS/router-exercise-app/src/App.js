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

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;