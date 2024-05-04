import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "./registration.css"; // Importing CSS file

function Registration() {
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    });
    setDone(!done);
  };

  return (
    <div className="overlay">
      <div className="registration-container">
        <h2>Registration Form</h2>
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
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
