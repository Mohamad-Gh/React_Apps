import React from "react";
// import GradeIcon from "@mui/icons-material/Grade";
import Rating from "@mui/material/Rating";

import "./userTestimonialCard.css";

function UserTestimonial(props) {
  return (
    <form className="user-testimonials-box">
      <div className="user-testimonials-person">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="e.g., Jon Doe"
          name="name"
          value={props.name}
          onChange={(e) => {
            /* Update props.name based on input */
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          placeholder={"e.g., Torronto"}
          id="city"
          name="city"
          value={props.city}
          onChange={(e) => {
            /* Update props.city based on input */
          }}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          rows={4}
          id="comment"
          name="comment"
          placeholder="Write your experience with our fleet"
        >
          {props.comment}
        </textarea>
        <div className="userTestimonialRating">
          <h4>Rate Your Experience</h4>
          <Rating
            name="read-only"
            value={props.rate}
            precision={0.5}
            size="large"
            readOnly
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
