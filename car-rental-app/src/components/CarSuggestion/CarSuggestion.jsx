import CarCard from "../CarCard/CarCard";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carSuggestion.css";
import cars from "../../Assets/cars.json";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dotsClass: "slick-dots",
};

function CarSuggestion() {
  return (
    <div className="carSuggestion">
      <div className="carSuggestionCarousel">
        <div>
          <Slider className="carSuggested" {...settings}>
            {cars.cars.map((car) => (
              <CarCard
                className="smalls"
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
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarSuggestion;
