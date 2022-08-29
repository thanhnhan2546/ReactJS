import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/UserActions";
import "./Register.css";
export default class Register extends Component {
  state = {
    values: {
      name: "",
      gender: true,
      email: "",
      passWord: "",
      pwConfirm: "",
      phone: "",
    },
    errors: {
      name: "",
      gender: true,
      email: "",
      passWord: "",
      pwConfirm: "",
      phone: "",
    },
  };

  handleValue = (e) => {
    let { name, value } = e.target;

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    value.trim() === ""
      ? (newErrors[name] = name + " is required !")
      : (newErrors[name] = "");

    // if (name === "pwConfirm") {
    //   value === newValues.passWord
    //     ? newErrors[name] == ""
    //     : (newErrors[name] = "Password is inconfirm !");

    // }
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
      alert("Register is invalid");
      console.log(this.state.values);
      //   return;
    } else {
      this.register();
    }
  };
  register = () => {
    signUp(this.state.values);
  };
  render() {
    return (
      <section className="registerContent">
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="titleRegister">
            <h1>Register</h1>
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
                <div className="form-group">
                  <input
                    onChange={this.handleValue}
                    name="pwConfirm"
                    className="form-control"
                    type="password"
                    placeholder="password confirm"
                  />
                  <span>(*)</span>
                </div>
                <span className="errorSpan" name="errPwConfirm">
                  {this.state.errors.pwConfirm}
                </span>
              </div>
              <div className="col-xl-6 col-12 column">
                <div className="form-group">
                  <input
                    onChange={this.handleValue}
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                  <span>(*)</span>
                </div>
                <span className="errorSpan" name="errName">
                  {this.state.errors.name}
                </span>
                <div className="form-group">
                  <input
                    onChange={this.handleValue}
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="phone"
                  />
                  <span>(*)</span>
                </div>
                <span className="errorSpan" name="errPhone">
                  {this.state.errors.phone}
                </span>
                <div className="form-group gender">
                  <nav>Gender</nav>
                  <input
                    className="form-control radioGender"
                    type="radio"
                    name="gender"
                    value="true"
                    defaultChecked
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    className="form-control radioGender"
                    type="radio"
                    name="gender"
                    value="false"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <button name="btnSubmit" className="btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

// export default connect()(Register);
