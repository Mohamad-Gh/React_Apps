import CarCard from "../CarCard/CarCard";

import Slider from "react-slick";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carSuggestion.css";
import cars from "../../Assets/cars.json";
import { GlobalContext } from "../App";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dotsClass: "slick-dots",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

function CarSuggestion(props) {
  const value = useContext(GlobalContext);
  var suggestedCars = cars.cars;
  cars.cars.map((car) => {
    if (car.id == value.carId) {
      const valueType = car.type;
      return (suggestedCars = cars.cars
        .filter(
          (element) => element.type == valueType && element.id != value.carId
        )
        .slice(0, 6));
    }
  });

  return (
    <div className="carSuggestion">
      <div className="carSuggestionCarousel">
        <h3>More Cars</h3>
        <div>
          <Slider className="carSuggested" {...settings}>
            {suggestedCars.map((car) => (
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
                onClick={(event) => {
                  props.id(event.currentTarget.id);
                }}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarSuggestion;
