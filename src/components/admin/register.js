import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username:"",
    password:""
  };

  formAxios = cred => {
    axios
      .post("http://localhost:7000/auth/register", cred)
      .then(data => console.log(data,"done!!!!!!!"))
      .catch(e => console.log(e));
  };

  onhandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmitValue = e => {
    e.preventDefault();
    this.formAxios(this.state)
    // this.props.history.push("/login")
  };

  render() {
    console.log(this.state)
    return (
      <div className="admin__container"> <h1 className="admin__header">Register</h1>
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

        <button className="btn btn-transparent">Register</button>
      </form></div>
    );
  }
}

export default Register;
