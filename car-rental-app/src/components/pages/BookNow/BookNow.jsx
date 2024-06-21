import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import BlackDivider from "../../BlackDivider/BlackDivider";
import Booking from "../../Booking/Booking";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import cars from "../../../Assets/cars.json";
import BookCard from "../../BookCard/BookCard";
import { useEffect } from "react";

function BookNow() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const value = useContext(GlobalContext);
  const bookedCar = cars.cars.filter((car) => car.id == value.carId);
  const [price, setPrice] = useState(0);
  const driverPrice = price != 0 ? price.extraDriver * 50 : null;
  const boosterPrice = price != 0 ? price.childBooster * 30 : null;
  const babySeatPrice = price != 0 ? price.babySeat * 35 : null;
  const extraMileagePrice = price != 0 ? price.extraMileage * 0.1 : null;

  const calculateDaysDifference = (startingDate, endingDate) => {
    const currentDate = new Date();
    const pickUpDate = new Date(startingDate);
    const dropDate = new Date(endingDate);
    if (startingDate != 0 && pickUpDate < currentDate) {
      alert("Please select a proper Pick Up date");
      return;
    }
    if ((startingDate = !0 && endingDate != 0 && pickUpDate >= dropDate)) {
      alert("Please reselect pick up and drop dates");
      return;
    }
    const timeDifference = dropDate - pickUpDate; // Difference in milliseconds
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days and round up
    return dayDifference;
  };
  const days =
    calculateDaysDifference(price.startDate, price.endDate) > 0
      ? calculateDaysDifference(price.startDate, price.endDate)
      : 0;

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
          basePrice={car.starting_price * days}
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
          days={days}
          driverPrice={driverPrice}
          boosterPrice={boosterPrice}
          babySeatPrice={babySeatPrice}
          extraMileagePrice={extraMileagePrice}
          totalPrice={Math.floor(
            (car.starting_price * days +
              driverPrice +
              boosterPrice +
              babySeatPrice +
              extraMileagePrice) *
              1.12
          )}
        />
      ))}
      <Footer />
    </>
  );
}

export default BookNow;
