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
    // divide data based on their name
    const { name, value } = event.target;
    setUserInfo((prvs) => {
      return { ...prvs, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // check if the use selected rate and give alert
    if (!userInfo.rate) {
      alert("Plese select the rate");
    } else {
      // if everything is provided pass info to the parent
      props.info(userInfo);
      // reset info after submition
      setUserInfo({ name: "", city: "", comment: "", rate: "" });
    }
    // to preventDefault in all cases
    e.preventDefault();
  };

  return (
    <form
      className="user-testimonials-box"
      // monitor change
      onChange={handleChange}
      // handlesubmit
      onSubmit={handleSubmit}
    >
      <h3>How Was Your Time With Us</h3>
      <div className="user-testimonials-person">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="e.g., Jon Doe"
          name="name"
          // to set the value based on user input
          value={userInfo.name}
          required
        />
        <label htmlFor="city">City:</label>
        <input
          placeholder={"e.g., Torronto"}
          id="city"
          name="city"
          // to set the value based on user input
          value={userInfo.city}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          rows={4}
          id="comment"
          name="comment"
          placeholder="Write your experience with our fleet"
          // to set the value based on user input
          value={userInfo.comment}
          required
        >
          {props.comment}
        </textarea>
        <div className="userTestimonialRating">
          <h4>Rate Your Experience</h4>
          <Rating
            id="controlled"
            name="rate"
            // to set the value based on user input
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
