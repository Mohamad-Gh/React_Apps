import Card from "./Card";

import carCard from "../Assets/images/car-card.png";
import personCard from "../Assets/images/person-card.png";
import travelCard from "../Assets/images/travel-card.png";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <div className="full-container">
        <div className="container">
          <div className="title-header">
            <h3>{props.h3}</h3>
            <h2>{props.h2}</h2>
          </div>
          <div className="card-container">
            <Card
              img={carCard}
              title="Select Car"
              text="
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs"
            />
            <Card
              img={personCard}
              title="Contact Operator"
              text="                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
"
            />
            <Card
              img={travelCard}
              title="Let's Drive"
              text="Whether you're hitting the open road, we've got you covered
                  with our wide range of cars"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
