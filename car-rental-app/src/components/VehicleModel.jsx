import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import Booking from "./Booking";
import CarCard from "./CarCard";

import cars from "../Assets/cars.json";
import "./vehicleModel.css";
import ControlPanel from "./ControlPanel";
function VehicleModel() {
  const [price, setPrice] = useState(true);

  const changePrice = (event) => {
    event.target.value === "ascending" ? setPrice(true) : setPrice(false);
  };

  return (
    <div>
      <Header />
      <ControlPanel price={changePrice} />
      <div className="carAlbum">
        {cars.cars
          .filter((elmn) => elmn.luggage_capacity >= 2)
          .sort((a, b) =>
            price
              ? a.starting_price - b.starting_price
              : b.starting_price - a.starting_price
          )
          .map((car) => (
            <CarCard
              key={car.id}
              model={car.car_model}
              city={car.fuel_efficiency.city}
              highway={car.fuel_efficiency.highway}
              // description={car.car_description}
              price={`$${car.starting_price} per day`}
              luggage={car.luggage_capacity}
              passenger={car.passenger_capacity}
              transmission={car.features.transmission}
              AC={car.features.AC}
              RA={car.features.road_assistant}
              smoke={car.features.smoke_free}
              gps={car.features.gps}
              img={car.image_url}
            />
          ))}
      </div>
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Booking />
      <Footer />
    </div>
  );
}

export default VehicleModel;
