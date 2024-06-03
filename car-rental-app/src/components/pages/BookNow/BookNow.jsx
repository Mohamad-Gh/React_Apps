import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import Booking from "../../Booking/Booking";

function BookNow() {
  return (
    <>
      <div>BookNow</div>
      <Header />
      <Booking />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Footer />
    </>
  );
}

export default BookNow;
