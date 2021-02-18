import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
    axios
      .post("http://161.35.176.70/auth/local", {
        identifier: this.state.email,
        password: this.state.password,
      })
      .then((response) => localStorage.setItem("token", response.data.jwt))
      .then(this.props.history.push("/"));
  }
  render() {
    return (
      <div className="text-center m-5">
        <h1></h1>
        <main className="row justify-content-center align-self-center form-signin">
          <form style={{ width: 330, height: 300 }}>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              className="form-control m-2"
              value={this.state.email}
            />
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="password"
              className="form-control m-2"
              value={this.state.password}
            />
            <button
              onClick={this.handleSubmit}
              className="w-100 btn btn-lg btn-primary m-2"
              type="submit"
            >
              Login
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default LoginForm;
