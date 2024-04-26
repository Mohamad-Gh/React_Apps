import React from "react";

function ContactDetails(props) {
  return (
    <>
      <h2>{props.h2}</h2>
      <p>{props.text}</p>
      <p>{props.tel}</p>
      <a href="">
        <p>{props.email}</p>
      </a>
      <p>{props.address}</p>
    </>
  );
}

export default ContactDetails;
