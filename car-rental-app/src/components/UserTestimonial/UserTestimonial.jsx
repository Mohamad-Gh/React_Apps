import React, { useState } from "react";
// import GradeIcon from "@mui/icons-material/Grade";
import Rating from "@mui/material/Rating";

import "./userTestimonialCard.css";

function UserTestimonial(props) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    city: "",
    comment: "",
    rate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prvs) => {
      return { ...prvs, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    if (!userInfo.rate) {
      alert("Plese select the rate");
    } else {
      props.info(userInfo);
      setUserInfo({ name: "", city: "", comment: "", rate: "" });
    }
    e.preventDefault();
  };

  return (
    <form className="user-testimonials-box" onSubmit={handleSubmit}>
      <h3>How Was Your Time With Us</h3>
      <div className="user-testimonials-person">
        <label htmlFor="name">Name:</label>
        <input
          // handlechanges on this input
          onChange={handleChange}
          id="name"
          placeholder="e.g., Jon Doe"
          name="name"
          value={userInfo.name}
          required
        />
        <label htmlFor="city">City:</label>
        <input
          onChange={handleChange}
          placeholder={"e.g., Torronto"}
          id="city"
          name="city"
          value={userInfo.city}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          onChange={handleChange}
          rows={4}
          id="comment"
          name="comment"
          placeholder="Write your experience with our fleet"
          value={userInfo.comment}
          required
        >
          {props.comment}
        </textarea>
        <div className="userTestimonialRating">
          <h4>Rate Your Experience</h4>
          <Rating
            onChange={handleChange}
            id="controlled"
            name="rate"
            value={userInfo.rate}
            precision={0.5}
            size="large"
            Controlled
            required
          />
        </div>
      </div>
      <button
        className="user-testimonial-btn"
        type="submit"
        aria-label="Submit Testimonial"
      >
        Submit
      </button>
    </form>
  );
}

export default UserTestimonial;
