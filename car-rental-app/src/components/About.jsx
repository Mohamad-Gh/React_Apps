import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import HeroSection from "./HeroSection";
import ContentCard from "./ContentCard";

function About() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
export default About;
