import axios from "axios";

export const signUp = (values) => {
  //   console.log(values);
  let promise = axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: values,
  });

  promise.then((res) => {
    alert("Success Register ");
  });
  promise.catch((err) => {
    alert("Failed Register");
  });
};

export const Signin = (values) => {
  console.log(values);
  let promise = axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    data: values,
  });
  promise.then((res) => {
    localStorage.setItem("user", values.email);
  });
  promise.catch((err) => {
    alert("Login failed");
  });
};
