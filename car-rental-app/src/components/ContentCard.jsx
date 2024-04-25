import React from "react";

function ContentCard(props) {
  return (
    <>
      <h2>{props.h2}</h2>
      <h1>
        {props.h1}
        <span> {props.span}</span> {props.h1More}
      </h1>
      <p>{props.text}</p>
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
    </>
  );
}

export default ContentCard;
