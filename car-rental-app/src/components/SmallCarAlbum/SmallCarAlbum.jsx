import React, { useState } from "react";

import HyundaiIoniq6 from "../../Assets/images/Hyundai.png";
import ChevroletCorvetteZ06 from "../../Assets/images/chevrolet.png";
import KiaEV6 from "../../Assets/images/Kia.png";
import AudiA6 from "../../Assets/images/Audi_A6.png";
import AudiA6Allroad from "../../Assets/images/Audi_All.png";
import BMWM4CSL from "../../Assets/images/BMW.png";

import samples from "../../Assets/sampleCars.json";

function SmallCarAlbum(props) {
  const [car, setCar] = useState({
    activeId: "20",
    price: samples["20"].price,
    img: HyundaiIoniq6,
    model: samples["20"].model,
    mark: samples["20"].mark,
    year: samples["20"].year,
    doors: samples["20"].doors,
    AC: samples["20"].AC,
    transmission: samples["20"].transmission,
    fuel: samples["20"].fuel,
  });
  const [activeId, setActive] = useState("20");

  function handleClick(event) {
    let image = null;
    switch (event.target.id) {
      case "20":
        image = HyundaiIoniq6;
        // id = 20;
        break;
      case "21":
        image = ChevroletCorvetteZ06;
        // id = 21;
        break;
      case "22":
        image = KiaEV6;
        // id = 22;
        break;
      case "23":
        image = AudiA6;
        // id = 23;
        break;
      case "24":
        image = AudiA6Allroad;
        // id = 24;
        break;
      case "25":
        image = BMWM4CSL;
        // id = 25;
        break;
      default:
        image = HyundaiIoniq6;
    }
    setCar({
      price: samples[event.target.id].price,
      img: image,
      model: samples[event.target.id].model,
      mark: samples[event.target.id].mark,
      year: samples[event.target.id].year,
      doors: samples[event.target.id].doors,
      AC: samples[event.target.id].AC,
      transmission: samples[event.target.id].transmission,
      fuel: samples[event.target.id].fuel,
    });
    setActive(event.target.id);
  }
  return (
    <section className="car-album">
      <div className="full-container">
        <div className="container-album">
          <div className="title-header">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="album" onClick={props.onClick}>
            <div onClick={handleClick} className="cars">
              <div id={"20"} className={activeId == "20" && "selected"}>
                Hyundai Ioniq 6
              </div>
              <div id={"21"} className={activeId == "21" && "selected"}>
                Chevrolet Corvette Z06
              </div>
              <div id={"22"} className={activeId == "22" && "selected"}>
                Kia EV6
              </div>
              <div id={"23"} className={activeId == "23" && "selected"}>
                Audi A6
              </div>
              <div id={"24"} className={activeId == "24" && "selected"}>
                Audi A6 Allroad
              </div>
              <div id={"25"} className={activeId == "25" && "selected"}>
                BMW M4 CSL
              </div>
            </div>
            <div className="car-img">
              <img src={car.img} />
            </div>
            <div className="car-details">
              <div className="car-details-header">
                <span id="price" className="car-price">
                  ${car.price}
                </span>
                / day rent
              </div>
              <div className="details-table">
                <div>
                  <span>Model</span>
                  <span>|</span>
                  <span id="model">{car.model}</span>
                </div>
                <div>
                  <span>Mark</span>
                  <span>|</span>
                  <span id="mark">{car.mark}</span>
                </div>
                <div>
                  <span>Year</span>
                  <span>|</span>
                  <span id="year">{car.year}</span>
                </div>
                <div>
                  <span>Doors</span>
                  <span>|</span>
                  <span id="doors">{car.doors}</span>
                </div>
                <div>
                  <span>AC</span>
                  <span>|</span>
                  <span id="ac">{car.AC}</span>
                </div>
                <div>
                  <span>Transmission</span>
                  <span>|</span>
                  <span>{car.transmission}</span>
                </div>
                <div>
                  <span>Fuel</span>
                  <span>|</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
              <div>
                <a>
                  <button className="reserve-btn">Reserve NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmallCarAlbum;
