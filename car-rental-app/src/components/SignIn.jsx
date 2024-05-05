import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";

import "./registration.css"; // Importing CSS file

function SignIn(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function showPassword() {
    setFormData((prevData) => ({
      ...prevData,
      ["showPassword"]: !formData.showPassword,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, such as sending data to a server
    // console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      email: "",
      password: "",
      showPassword: false,
    });
    // to show that the process was successful.
  };

  return (
    <div>
      <div onClick={() => props.triger(false)} className="overlay"></div>
      <div className="registration-container">
        <h2>Sign in Form</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Input
              className="form-control"
              type={formData.showPassword ? "text" : "password"}
              id="password"
              name="password"
              minLength={8}
              maxLength={15}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              value={formData.password}
              onChange={handleChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={showPassword}>
                    {formData.showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <button type="submit" className="btn-register">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
