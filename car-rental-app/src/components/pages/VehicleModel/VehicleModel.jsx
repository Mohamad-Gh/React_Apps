import React, { useState } from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import Booking from "../../Booking/Booking";
import CarCard from "../../CarCard/CarCard";
import ControlPanel from "../../ControlPanel/ControlPanel";

import "./vehicleModel.css";
import cars from "../../../Assets/cars.json";

function VehicleModel() {
  const [change, setChange] = useState({
    sortPrice: "none",
    luggageCapacity: 2,
    passengerCapacity: 2,
    fuelEfficiency: "none",
  });

  // .sort((a, b) =>
  //   change.sortPrice === "ascending"
  //     ? a.starting_price - b.starting_price
  //     : b.starting_price - a.starting_price
  // )
  // .sort((a, b) =>
  //   change.fuelEfficiency === "ascending"
  //     ? a.fuel_efficiency.city - b.fuel_efficiency.city
  //     : b.fuel_efficiency.city - a.fuel_efficiency.city
  // )
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
          .sort((a, b) => {
            let sortPrice =
              change.sortPrice === "ascending"
                ? 1
                : change.sortPrice === "descending"
                ? -1
                : null;
            let sortFuelEfficiency =
              change.fuelEfficiency === "ascending"
                ? 1
                : change.fuelEfficiency === "descending"
                ? -1
                : null;

            return (
              sortPrice * (a.starting_price - b.starting_price) +
              sortFuelEfficiency *
                (a.fuel_efficiency.city - b.fuel_efficiency.city)
            );
          })
          .filter(
            (elmn) =>
              elmn.luggage_capacity >= change.luggageCapacity &&
              elmn.passenger_capacity >= change.passengerCapacity
          )
          .map((car) => (
            <CarCard
              key={car.id}
              model={car.car_model}
              city={`${car.fuel_efficiency.city} MPG`}
              highway={`${car.fuel_efficiency.highway} MPG`}
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
