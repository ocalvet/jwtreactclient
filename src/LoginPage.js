import React from "react";
import TokenHandler from "./TokenHandler";
import Authenticator from "./Authenticator";

const token = new TokenHandler();
const auth = new Authenticator(token);

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  onLogin = async e => {
    e.preventDefault();
    try {
      await auth.login(this.state.username, this.state.password);
      this.props.history.push("/secret");
    } catch (e) {
      this.setState({ error: e.toString() });
    }
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {this.state.error && this.state.error.length > 3 ? (
          <p>{this.state.error}</p>
        ) : null}
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
