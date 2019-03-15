class Authenticator {
  constructor(tokenHandler) {
    this.tokenHandler = tokenHandler;
  }

  async login(username, password) {
    try {
      const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          username,
          password
        })
      });
      if (response.status !== 200)
        throw new Error("There was an error performing login");
      const jsonBody = await response.json();
      this.tokenHandler.setToken(jsonBody.token);
      return jsonBody;
    } catch (e) {
      console.log(e);
      throw new Error("Something wrong with request");
    }
  }
}

export default Authenticator;
