import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import Booking from "../../Booking/Booking";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import cars from "../../../Assets/cars.json";
import BookCard from "../../BookCard/BookCard";

function BookNow() {
  const value = useContext(GlobalContext);
  const bookedCar = cars.cars.filter((car) => car.id == value.carId);
  const [price, setPrice] = useState({
    childBooster: 0,
    babySeat: 0,
    extraDriver: 0,
    extraMileage: 0,
  });
  return (
    <>
      <Header />
      <Booking prices={setPrice} />
      {bookedCar.map((car) => (
        <BookCard
          key={car.id}
          id={car.id}
          model={car.car_model}
          city={`${car.fuel_efficiency.city} MPG`}
          highway={`${car.fuel_efficiency.highway} MPG`}
          basePrice={car.starting_price}
          luggage={car.luggage_capacity}
          passenger={car.passenger_capacity}
          transmission={car.features.transmission}
          AC={car.features.AC}
          RA={car.features.road_assistant}
          smoke={car.features.smoke_free}
          gps={car.features.gps}
          img={car.image_url}
          number={car.rate}
          color={car.rate >= 8 ? "green" : car.rate >= 5 ? "purple" : "red"}
          boosterPrice={price.childBooster * 25}
          babySeatPrice={price.babySeat * 35}
          extraMileagePrice={price.extraMileage * 5}
          // totalPrice={
          //   car.starting_price +
          //   price.childBooster +
          //   price.babySeat +
          //   price.extraMileage
          // }
        />
      ))}
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Footer />
    </>
  );
}

export default BookNow;
