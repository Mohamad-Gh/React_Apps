import carHeroImage from "../../Assets/images/Audi-front-page.png";
import backGroundDesign from "../../Assets/images/background_desing.png";
import googlePlay from "../../Assets/images/google_play.png";
import appStore from "../../Assets/images/App_store.png";
import { Link } from "react-router-dom";

import SmallCarAlbum from "../SmallCarAlbum/SmallCarAlbum";
import BlackDivider from "../BlackDivider/BlackDivider";
import HeroSection from "../HeroSection/HeroSection";
import ContentCard from "../ContentCard/ContentCard";
import Booking from "../Booking/Booking";
import Faq from "../Faq/Faq";
import CarLogos from "../CarLogos/CarLogos";

function Main(props) {
  return (
    <main>
      <section className="first">
        <div className="full-container">
          <div className="container">
            <div className="content-card">
              <div className="content">
                <ContentCard
                  h2="Plan your trip now"
                  h1="Save"
                  span="big"
                  h1More="with our car rental"
                  text="Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more."
                />
                <div className="buttons">
                  <Link to="/Vehicle Model">
                    <button className="btn btn-book">
                      Book Ride &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-circle-check"
                      >
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M9 12l2 2l4 -4"></path>
                      </svg>
                    </button>
                  </Link>
                  <Link to="/About">
                    <button className="btn btn-dark">
                      Learn More &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-chevron-right"
                      >
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <img
                className="content-img"
                src={carHeroImage}
                alt="background for hero section"
              />
            </div>
          </div>
        </div>
        <img className="back-img" src={backGroundDesign} />
      </section>
      <Booking />
      <CarLogos />
      <HeroSection h3="Plan your trip now" h2="Quick & easy car rental" />
      <SmallCarAlbum onClick={props.onClick} />
      <BlackDivider
        title="Save big with our cheap car rental!"
        text="Top Airports. Local Suppliers."
        span="24/7"
        text2="Support."
      />
      <Faq />
      <section className="app">
        <div className="app-container">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="app-box">
            <a href="">
              <img src={googlePlay} />
            </a>
            <a href="">
              <img src={appStore} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
