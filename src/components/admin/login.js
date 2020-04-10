import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username:"",
    password:""
  };

  formAxios = cred => {
    axios
      .post("http://localhost:7000/auth/login", cred)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  onhandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmitValue = e => {
    e.preventDefault();
    this.formAxios(this.state)
  };

  render() {
    console.log(this.state.username)
    return (
      <div className="admin__container"> <h1 className=" admin__header">Login</h1>
      <form onSubmit={this.onsubmitValue} className="admin">
       
     
        <input
          onChange={this.onhandleChange}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
          className="admin__input"
        />

        <input
        name="password"
          onChange={this.onhandleChange}
          type="text"
          value={this.state.password}
          placeholder="password"
          className="admin__input"
        />

        <button className="btn btn-transparent">Login</button>
      </form></div>
    );
  }
}

export default Login;
