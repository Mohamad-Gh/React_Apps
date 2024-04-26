import React from "react";

function ContactDetails(props) {
  return (
    <div className="contact-details">
      <h2>{props.h2}</h2>
      <p className="text">{props.text}</p>
      <p>{props.tel}</p>
      <a href="">
        <p>{props.email}</p>
      </a>
      <p>{props.address}</p>
      <div className="socialMedia">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export default ContactDetails;
