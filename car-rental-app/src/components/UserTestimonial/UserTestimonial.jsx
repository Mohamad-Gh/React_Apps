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
          id="city"
          name="city"
          value={props.city}
          onChange={(e) => {
            /* Update props.city based on input */
          }}
        />
      </div>
      <label htmlFor="comment">Comment:</label>
      <textarea id="comment" name="comment">
        {props.comment}
      </textarea>
      <Rating
        name="read-only"
        value={props.rate}
        precision={0.5}
        size="large"
        readOnly
      />

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
