import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Redirect from './Redirect';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/redirect">
              Redirect
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/redirect">
          <Redirect />
        </Route>
        <Route path="/">
          <h1>Home Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}
