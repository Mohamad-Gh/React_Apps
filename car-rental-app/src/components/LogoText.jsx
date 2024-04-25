import React from "react";

function LogoText(props) {
  return (
    <div className="">
      <img src={props.img} alt={"logo of " + props.img} />
      <div>
        <div>{props.num}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}

export default LogoText;
