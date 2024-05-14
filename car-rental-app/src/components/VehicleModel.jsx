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
  const [change, setChange] = useState({
    sortPrice: "ascending",
    luggageCapacity: 2,
    passengerCapacity: 2,
    fuelEfficiency: "ascending",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setChange((prvs) => {
      return { ...prvs, [name]: value };
    });
  }

  return (
    <div>
      <Header />
      <ControlPanel
        price={handleChange}
        luggage={handleChange}
        passenger={handleChange}
        feul={handleChange}
      />
      <div className="carAlbum">
        {cars.cars
          .sort((a, b) =>
            change.sortPrice === "ascending"
              ? a.starting_price - b.starting_price
              : b.starting_price - a.starting_price
          )
          .sort((a, b) =>
            change.fuelEfficiency === "ascending"
              ? a.starting_price - b.starting_price
              : b.starting_price - a.starting_price
          )
          .filter((elmn) => elmn.luggage_capacity >= change.luggageCapacity)
          .filter((elmn) => elmn.luggage_capacity >= change.passengerCapacity)
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
