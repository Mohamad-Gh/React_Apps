import React, { useEffect, useState } from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CarCard from "../../CarCard/CarCard";
import ControlPanel from "../../ControlPanel/ControlPanel";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./vehicleModel.css";
import cars from "../../../Assets/cars.json";

function VehicleModel(props) {
  const [change, setChange] = useState({
    sortPrice: "none",
    luggageCapacity: 1,
    passengerCapacity: 2,
    fuelEfficiency: "none",
    title: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  function handleChange(event) {
    setCurrentPage(1);
    const { name, value } = event.target;
    setChange((previousValue) => {
      return { ...previousValue, [name]: value };
    });
  }

  const filteredCars = cars.cars
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
        (sortPrice ? sortPrice * (a.starting_price - b.starting_price) : 0) +
        (sortFuelEfficiency
          ? sortFuelEfficiency *
            (a.fuel_efficiency.city - b.fuel_efficiency.city)
          : 0)
      );
    })
    .filter(
      (element) =>
        element.luggage_capacity >= change.luggageCapacity &&
        element.passenger_capacity >= change.passengerCapacity &&
        element.car_model.toLowerCase().indexOf(change.title.toLowerCase()) !==
          -1
    );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  // const handlePreviousPage = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // };

  // handleing page based on its number using UI material component
  const handlePage = (page) => setCurrentPage(page);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="full-container">
        <div className="container">
          <div className="titleText">
            <h2>DISCOVER OUR RENTAL VEHICLES</h2>
            <p>
              Our fleet of rental cars and trucks are always carefully chosen
              based on client’s need and previous satisfaction reports. From
              Compact to SUVs and Trucks, we got the newest features you would
              expect from current year model cars for hire.
            </p>
          </div>
        </div>
      </div>
      <ControlPanel
        query={handleChange}
        price={handleChange}
        luggage={handleChange}
        passenger={handleChange}
        fuel={handleChange}
      />
      <div className="carAlbum">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            model={car.car_model}
            city={`${car.fuel_efficiency.city} MPG`}
            highway={`${car.fuel_efficiency.highway} MPG`}
            price={`$${car.starting_price} per day`}
            luggage={car.luggage_capacity}
            passenger={car.passenger_capacity}
            transmission={car.features.transmission}
            AC={car.features.AC}
            RA={car.features.road_assistant}
            smoke={car.features.smoke_free}
            gps={car.features.gps}
            img={car.image_url}
            // setting onlick to check the event and pass the currentTarget id to the parent
            onClick={(event) => {
              props.id(event.currentTarget.id);
            }}
          />
        ))}
      </div>
      <Stack spacing={2} className="pagination">
        <Pagination
          count={totalPages}
          color="secondary"
          onChange={(event, page) => {
            handlePage(page);
          }}
        />
      </Stack>
      {/* old way of changing page */}
      {/* <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
      {/* <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      /> */}
      <Footer />
    </div>
  );
}

export default VehicleModel;
