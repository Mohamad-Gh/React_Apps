import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";

function OurTeam() {
  return (
    <div>
      <Header />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Footer />
    </div>
  );
}

export default OurTeam;
