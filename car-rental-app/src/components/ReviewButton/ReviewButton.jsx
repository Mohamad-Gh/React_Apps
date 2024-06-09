import React from "react";
import "./reviewButton.css";
function ReviewButton({ number, color }) {
  return <div className={`reviewNumber ${color}`}>{number}</div>;
}

export default ReviewButton;
