import React from "react";
import { Link } from "react-router-dom";

function RentCar() {
  return (
    <div className="rent">
      <h2>Ready To Drive</h2>
      <Link className="btn btn-nav" to="/">
        Rent A Car
      </Link>
    </div>
  );
}

export default RentCar;
