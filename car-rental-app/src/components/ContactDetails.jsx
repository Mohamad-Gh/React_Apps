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
      <div className="socialMedias">
        <i>Icon 1{props.telegram}</i>
        <i>Instagram {props.instagram}</i>
        <i>Twitter {props.twitter}</i>
        <i>Icon 4 {props.icon4}</i>
        <i>Whatsapp {props.whatsapp}</i>
      </div>
    </div>
  );
}

export default ContactDetails;
