import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LuggageIcon from "@mui/icons-material/Luggage";
import PeopleIcon from "@mui/icons-material/People";
import MemoryIcon from "@mui/icons-material/Memory";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SupportIcon from "@mui/icons-material/Support";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";

import "./CarCard.css";

function CarCard(props) {
  return (
    <div className="flexCarCards">
      <div className="modelCard">
        <h2 itemprop="catagory">{Compact}</h2>
        <div className="modelCard-p">
          <p>
            <strong>City:</strong> 7.8l/100km
            <br></br>
            <strong>Highway:</strong> 6l/100km
          </p>
          <LocalGasStationIcon />
        </div>
      </div>
      <div className="middleCard">
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
      <div className="bottomCard">
        <div className="carFeatures">
          <div className="carModel">
            <h3 itemprop="model">Hyundai Accent or similar</h3>
            <p>Starting at $27.95/day</p>
            <ul className="featureDetails">
              <li>
                <ul className="capacity">
                  <li className="luggages" itemprop="cargoVolume">
                    <LuggageIcon />2
                  </li>
                  <li className="passengers" itemprop="seatingCapacity">
                    <PeopleIcon />4
                  </li>
                </ul>
              </li>
              <li className="transmission" itemprop="vehicleTransmission">
                <MemoryIcon /> automatic
              </li>
              <li className="ac" itemprop="additionalProperty">
                <AcUnitIcon />
                Air conditioning
              </li>
              <li className="road">
                <SupportIcon />
                Roadside Assistance
              </li>
              <li className="smokefree">
                <SmokeFreeIcon />
                Smoke Free Vehicle
              </li>
              <li className="gps">
                <GpsFixedIcon />
                Free GPS
              </li>
              <li className="age">
                <CreditCardIcon />
                20 years +
              </li>
            </ul>
          </div>
          <div className="actions">
            <a
              className="moreButton"
              itemprop="url"
              href="https://www.globecar.com/en/vehicles/compact/"
            >
              More
            </a>
            <a
              className="bookButton"
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
