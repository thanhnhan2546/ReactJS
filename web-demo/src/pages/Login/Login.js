import React, { Component } from "react";
import { Signin } from "../../redux/actions/UserActions";
import "./Login.css";
export default class Login extends Component {
  state = {
    values: {
      email: "",
      passWord: "",
    },
    errors: {
      email: "",
      passWord: "",
    },
  };
  handleValue = (e) => {
    let { name, value } = e.target;

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    value.trim() === ""
      ? (newErrors[name] = name + " is required !")
      : (newErrors[name] = "");

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let { values, errors } = this.state;

    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        console.log("values");
        valid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] === "") {
        valid = true;
      }
    }

    if (!valid) {
      alert("Login is invalid");
      console.log(this.state.values);
      //   return;
    } else {
      this.login();
    }
  };
  login = () => {
    Signin(this.state.values);
  };

  render() {
    return (
      <section className="registerContent">
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="titleRegister">
            <h1>Login</h1>
          </div>
          <div className="alert alert-success alert-dismissible" id="alert">
            <a
              href="#"
              className="close"
              data-dismiss="alert"
              aria-label="close"
            >
              ×
            </a>
            <p id="notification" />
          </div>
          <div className="mainRegister">
            <div className="row">
              <div className="col-xl-6 col-12 column">
                <div className="form-group">
                  <input
                    onChange={this.handleValue}
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="email"
                  />
                  <span>(*)</span>
                </div>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
                <div className="form-group">
                  <input
                    onChange={this.handleValue}
                    name="passWord"
                    className="form-control"
                    type="password"
                    placeholder="password"
                  />
                  <span>(*)</span>
                </div>
                <span className="errorSpan" id="errPassword">
                  {this.state.errors.passWord}
                </span>
                <button name="btnSubmit" className="btn-submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
