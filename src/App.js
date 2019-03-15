import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import SecretPage from "./SecretPage";
import LoginPage from "./LoginPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>JWT testing application</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <hr />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/secret" component={SecretPage} />
        </div>
      </div>
    );
  }
}

export default App;
