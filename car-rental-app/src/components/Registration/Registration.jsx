import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";

import "./registration.css"; // Importing CSS file

function Registration(props) {
  // variable to show statue of the submition
  const [done, setDone] = useState(false);
  // variable to store form information and password visibility
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  // to add info to the form based on each input name
  const handleChange = (event) => {
    // divide event to two variables
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      showPassword: false,
    });
    // to show that the process was successful.
    setDone(!done);
  };

  return (
    <div>
      <div onClick={() => props.triger(false)} className="overlay"></div>
      <div className="registration-container">
        <h2>Registration Form</h2>
        {/* if submit was successful show Alert */}
        {done && (
          <Alert variant="filled" severity="success">
            {formData.firstName} Your Registration was successful. Your username
            is your email.
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Jone"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Jone.Doe@something.com"
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
              // password visibility based on showPassword value
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
                      // changing the icon based on showPassword value
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
            Register
          </button>
        </form>
        <p>
          Already have an Account,
          <span
            onClick={() => {
              props.triger(false);
              return props.trigerSign(true);
            }}
          >
            {" "}
            Here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
