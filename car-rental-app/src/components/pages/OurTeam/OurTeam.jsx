import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import CCarousel from "../../CCarousel/CCarousel";
import TeamMembersAlbum from "../../TeamMemberAlbum/TeamMembersAlbum";
import RentCar from "../../RentCar/RentCar";

function OurTeam() {
  return (
    <div>
      <Header />
      <div className="full-container">
        <div className="container-album">
          <div className="title-header">
            <h3>Meet Our Leaders</h3>
            {/* <h2>Our rental fleet</h2> */}
            <p>
              At DriveAway Rentals, we pride ourselves on offering a seamless
              and personalized experience to every customer.
            </p>
          </div>
        </div>
      </div>
      <CCarousel />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <TeamMembersAlbum />
      <RentCar />
      <Footer />
    </div>
  );
}

export default OurTeam;
