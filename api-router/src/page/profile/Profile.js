import React from "react";
import { Navigate } from "react-router-dom";

export default function Profile() {
  console.log("profle");
  if (localStorage.getItem("userLogin")) {
    return <div>profile</div>;
  } else {
    alert("Vui lòng đăng nhập ");
    return <Navigate to="/login" />;
  }
}
