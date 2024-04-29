import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import reasons from "../Assets/reasons.json";

function Why() {
  return (
    <div className="BookWithUs">
      <h2 className="bookWithUsTitle">Why Book With Us</h2>
      <div>
        <ul>
          {reasons.reasons.map((reason, indx) => {
            return (
              <li key={indx}>
                <span>
                  <CheckCircleIcon className="check" />
                </span>
                {reason}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Why;
