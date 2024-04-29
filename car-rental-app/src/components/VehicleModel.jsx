import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import Booking from "./Booking";
import CarCard from "./CarCard";

function VehicleModel() {
  return (
    <div>
      <Header />
      <CarCard />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Booking />
      <Footer />
    </div>
  );
}

export default VehicleModel;
