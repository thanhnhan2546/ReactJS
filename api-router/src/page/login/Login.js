import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  const handleValue = (evt) => {
    const { name, value } = evt.target;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleLogin = (evt) => {
    // evt.preventDefault();

    if (userLogin.username === "cyber" && userLogin.password === "thanhnhan") {
      // Thành công thì chuyển về trang trước
      localStorage.setItem("userLogin", userLogin.username);
      <Navigate to="/login" />;
    } else {
      alert("login failed");
    }
  };
  return (
    <form className="container " onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className="form-group ">
        <p>Username</p>
        <input
          type="text"
          name="username"
          id=""
          className="form-control"
          onChange={handleValue}
        />
      </div>
      <div className="form-group ">
        <p>Password</p>
        <input
          type="password"
          name="password"
          id=""
          className="form-control"
          onChange={handleValue}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
