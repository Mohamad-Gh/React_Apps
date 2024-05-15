import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import HeroSection from "../../HeroSection/HeroSection";
import ContentCard from "../../ContentCard/ContentCard";
import LogoText from "../../LogoText/LogoText";
import Form from "../../Form/Form";
import ContactDetails from "../../ContactDetails/ContactDetails";
import GoogleMap from "../../GoogleMap/GoogleMap";
// import MyGoogleMap from "../../MyGoogleMap/MyGoogleMap";

import "./about.css";
import carLogo from "../../../Assets/images/car-logo.png";
import garageLogo from "../../../Assets/images/garage-logo.png";
import carGarageLogo from "../../../Assets/images/car-garage-logo.png";

function About() {
  return (
    <>
      <Header />
      <section>
        <div className="full-container">
          <div className="container">
            <div className="center-card">
              <div>
                <img src="https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg" />
              </div>
              <div className="contentHero">
                <ContentCard
                  h2="About Company"
                  h1="You start the engine and your adventure begins"
                  text="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended."
                />
                <div className="content-logo-box">
                  <LogoText img={carLogo} num={20} text="Car Types" />
                  <LogoText
                    img={carGarageLogo}
                    num={85}
                    text="Rental Outlets"
                  />
                  <LogoText img={garageLogo} num={75} text="Repair Shop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroSection h3="Plan your trip now" h2="Quick & easy rent your car" />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <div className="container-detail-form">
        <div className="center-card">
          <ContactDetails
            h2="Need To Know Where We Are Located?"
            text="A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience."
            tel="(123) 456-7899"
            email="carrental@carmai.com"
            address="Car Rentals 1234 Dream Drive, Kelowna, BC, Canada V1X 5T5"
          />
          <GoogleMap />
        </div>
        {/* <MyGoogleMap /> */}
        <Form />
      </div>
      <Footer />
    </>
  );
}
export default About;
