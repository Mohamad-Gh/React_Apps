import React from "react";

function Register() {
  return (
    <form className="form">
      <label>Username:</label>
      <input type="text" placeholder="Username"></input>
      <label>Email:</label>
      <input type="email" placeholder="Email"></input>
    </form>
  );
}

export default Register;
