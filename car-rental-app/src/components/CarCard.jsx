import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import "./CarCard.css";

function CarCard(props) {
  return (
    <div className="flex-carCards">
      <div className="model-Card">
        <h2 itemprop="catagory">Compact</h2>
        <div className="model-Card-p">
          <p>
            <strong>City:</strong> 7.8l/100km
            <br></br>
            <strong>Highway:</strong> 6l/100km
          </p>
          <LocalGasStationIcon />
        </div>
      </div>
      <div className="middle-Card">
        <img
          width="400"
          height="270"
          src="https://www.globecar.com/wp-content/uploads/2017/09/ccar-400x270.png"
          data-src="https://www.globecar.com/wp-content/uploads/2017/09/ccar-400x270.png"
          className="attachment-medium size-medium wp-post-image lazy loaded"
          alt="ccar"
          itemprop="image"
          decoding="async"
          fetchpriority="high"
          data-srcset="https://www.globecar.com/wp-content/uploads/2017/09/ccar-200x135@2x.png 400w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-150x101.png 150w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-68x46.png 68w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-200x135.png 200w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-150x101@2x.png 300w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-68x46@2x.png 136w"
          data-sizes="(max-width: 400px) 100vw, 400px"
          sizes="(max-width: 400px) 100vw, 400px"
          srcset="https://www.globecar.com/wp-content/uploads/2017/09/ccar-200x135@2x.png 400w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-150x101.png 150w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-68x46.png 68w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-200x135.png 200w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-150x101@2x.png 300w, https://www.globecar.com/wp-content/uploads/2017/09/ccar-68x46@2x.png 136w"
          data-was-processed="true"
        />
      </div>
      <div className="bottom-Card">
        <div className="">
          <div className="">
            <h3 itemprop="model">Hyundai Accent or similar</h3>
            <p>Starting at $27.95/day</p>
            <ul className="car-features">
              <li className="luggages" itemprop="cargoVolume">
                2
              </li>
              <li className="passengers" itemprop="seatingCapacity">
                4
              </li>
              <li className="transmission" itemprop="vehicleTransmission">
                automatic
              </li>
              <li className="ac" itemprop="additionalProperty">
                air conditioning
              </li>
              <li className="road">Roadside Assistance</li>
              <li className="smokefree">Smoke Free Vehicle</li>
              <li className="gps">Free GPS</li>
              <li className="age">20 years +</li>
            </ul>
          </div>
          <div className="actions">
            <a
              className="button"
              itemprop="url"
              href="https://www.globecar.com/en/vehicles/compact/"
            >
              More
            </a>
            <a
              className="button full"
              itemprop="url"
              href="https://reserve.globecar.com/en/rent-a-car"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
