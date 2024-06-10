import React from "react";
import "./reviewButton.css";
function ReviewButton({ number, color }) {
  return (
    <div className={`reviewNumber ${color}`}>
      <div className="number">{number}</div>
    </div>
  );
}

export default ReviewButton;
