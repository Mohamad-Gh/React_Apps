import React from "react";
import "./logoText.css";

function LogoText(props) {
  return (
    <div className="logo-text-container">
      <img src={props.img} alt={"logo of " + props.img} />
      <div className="text-box">
        <h2>{props.num}</h2>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

export default LogoText;
