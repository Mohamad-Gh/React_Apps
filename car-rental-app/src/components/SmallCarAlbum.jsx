import React, { useState } from "react";

import HyundaiIoniq6 from "../Assets/images/Hyundai.png";
import ChevroletCorvetteZ06 from "../Assets/images/chevrolet.png";
import KiaEV6 from "../Assets/images/Kia.png";
import AudiA6 from "../Assets/images/Audi_A6.png";
import AudiA6Allroad from "../Assets/images/Audi_All.png";
import BMWM4CSL from "../Assets/images/BMW.png";

import samples from "../Assets/sampleCars.json";

function SmallCarAlbum() {
  const [car, setCar] = useState({
    price: samples.HyundaiIoniq6.price,
    img: HyundaiIoniq6,
    model: samples.HyundaiIoniq6.model,
    mark: samples.HyundaiIoniq6.mark,
    year: samples.HyundaiIoniq6.year,
    doors: samples.HyundaiIoniq6.doors,
    AC: samples.HyundaiIoniq6.AC,
    transmission: samples.HyundaiIoniq6.transmission,
    fuel: samples.HyundaiIoniq6.fuel,
  });

  function handleClick(event) {
    let image = null;
    switch (event.target.id) {
      case "HyundaiIoniq6":
        image = HyundaiIoniq6;
        break;
      case "ChevroletCorvetteZ06":
        image = ChevroletCorvetteZ06;
        break;
      case "KiaEV6":
        image = KiaEV6;
        break;
      case "AudiA6":
        image = AudiA6;
        break;
      case "AudiA6Allroad":
        image = AudiA6Allroad;
        break;
      case "BMWM4CSL":
        image = BMWM4CSL;
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
          <div className="album">
            <div onClick={handleClick} className="cars">
              <div id="HyundaiIoniq6" className="selected">
                Hyundai Ioniq 6
              </div>
              <div id="ChevroletCorvetteZ06">Chevrolet Corvette Z06</div>
              <div id="KiaEV6">Kia EV6</div>
              <div id="AudiA6">Audi A6</div>
              <div id="AudiA6Allroad">Audi A6 Allroad</div>
              <div id="BMWM4CSL">BMW M4 CSL</div>
            </div>
            <div className="car-img">
              <img src={car.img} />
            </div>
            <div className="car-details">
              <div className="car-details-header">
                <span id="price" className="car-price">
                  {car.price} $
                </span>
                / rent per day
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
