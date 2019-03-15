import React from "react";
import TokenHandler from "./TokenHandler";
import Authenticator from "./Authenticator";

const token = new TokenHandler();
const auth = new Authenticator(token);

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onLogin = e => {
    e.preventDefault();
    console.log("Logging in...", this.state);
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <form noValidate>
          <div>
            <label>Username</label>
            <input
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <button onClick={this.onLogin}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
