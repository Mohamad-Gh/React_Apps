import React, { useState } from "react";

import hyundai from "../Assets/images/Hyundai.png";
import chevrolet from "../Assets/images/chevrolet.png";
import kia from "../Assets/images/Kia.png";
import audiA6 from "../Assets/images/Audi_A6.png";
import audiAll from "../Assets/images/Audi_All.png";
import bmw from "../Assets/images/BMW.png";

import samples from "../Assets/sampleCars.json";

function SmallCarAlbum() {
  const [car, setCar] = useState({
    price: samples.HyundaiIoniq6.price,
    img: hyundai,
    model: samples.HyundaiIoniq6.model,
    mark: samples.HyundaiIoniq6.mark,
    year: samples.HyundaiIoniq6.year,
    doors: samples.HyundaiIoniq6.doors,
    AC: samples.HyundaiIoniq6.AC,
    transmission: samples.HyundaiIoniq6.transmission,
    fuel: samples.HyundaiIoniq6.fuel,
  });

  function handleClick(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "Kia":
        setCar({
          price: samples.KiaEV6.price,
          img: kia,
          model: samples.KiaEV6.model,
          mark: samples.KiaEV6.mark,
          year: samples.KiaEV6.year,
          doors: samples.KiaEV6.doors,
          AC: samples.KiaEV6.AC,
          transmission: samples.KiaEV6.transmission,
          fuel: samples.KiaEV6.fuel,
        });
        break;
      case "chevrolet":
        setCar({
          price: samples.ChevroletCorvetteZ06.price,
          img: chevrolet,
          model: samples.ChevroletCorvetteZ06.model,
          mark: samples.ChevroletCorvetteZ06.mark,
          year: samples.ChevroletCorvetteZ06.year,
          doors: samples.ChevroletCorvetteZ06.doors,
          AC: samples.ChevroletCorvetteZ06.AC,
          transmission: samples.ChevroletCorvetteZ06.transmission,
          fuel: samples.ChevroletCorvetteZ06.fuel,
        });
        break;
      case "Hyundai":
        setCar({
          price: samples.HyundaiIoniq6.price,
          img: hyundai,
          model: samples.HyundaiIoniq6.model,
          mark: samples.HyundaiIoniq6.mark,
          year: samples.HyundaiIoniq6.year,
          doors: samples.HyundaiIoniq6.doors,
          AC: samples.HyundaiIoniq6.AC,
          transmission: samples.HyundaiIoniq6.transmission,
          fuel: samples.HyundaiIoniq6.fuel,
        });
        break;
      case "Audi_A6":
        setCar({
          price: samples.AudiA6.price,
          img: audiA6,
          model: samples.AudiA6.model,
          mark: samples.AudiA6.mark,
          year: samples.AudiA6.year,
          doors: samples.AudiA6.doors,
          AC: samples.AudiA6.AC,
          transmission: samples.AudiA6.transmission,
          fuel: samples.AudiA6.fuel,
        });
        break;
      case "Audi_All":
        setCar({
          price: samples.AudiA6Allroad.price,
          img: audiAll,
          model: samples.AudiA6Allroad.model,
          mark: samples.AudiA6Allroad.mark,
          year: samples.AudiA6Allroad.year,
          doors: samples.AudiA6Allroad.doors,
          AC: samples.AudiA6Allroad.AC,
          transmission: samples.AudiA6Allroad.transmission,
          fuel: samples.AudiA6Allroad.fuel,
        });
        break;
      case "BMW":
        setCar({
          price: samples.BMWM4CSL.price,
          img: bmw,
          model: samples.BMWM4CSL.model,
          mark: samples.BMWM4CSL.mark,
          year: samples.BMWM4CSL.year,
          doors: samples.BMWM4CSL.doors,
          AC: samples.BMWM4CSL.AC,
          transmission: samples.BMWM4CSL.transmission,
          fuel: samples.BMWM4CSL.fuel,
        });
        break;
    }
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
              <div id="Hyundai" className="selected">
                Hyundai Ioniq 6
              </div>
              <div id="chevrolet">Chevrolet Corvette Z06</div>
              <div id="Kia">Kia EV6</div>
              <div id="Audi_A6">Audi A6</div>
              <div id="Audi_All">Audi A6 Allroad</div>
              <div id="BMW">BMW M4 CSL</div>
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
