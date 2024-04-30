import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import BlackDivider from "./BlackDivider";
import Booking from "./Booking";
import CarCard from "./CarCard";

import cars from "../Assets/cars.json";

function VehicleModel() {
  return (
    <div>
      <Header />
      <div className="carAlbum">
        {cars.cars.map((car) => (
          <CarCard
            key={car.id}
            model={car.car_model}
            city={car.fuel_efficiency.city}
            highway={car.fuel_efficiency.highway}
            // description={car.car_description}
            price={car.starting_price}
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
