import React from "react";
import "CarCard.css";

function CarCard(props) {
  return (
    <div class="mini-wrap flex-wrap">
      <div class="flexcol top">
        <h2 itemprop="name">Compact</h2>
        <p class="fuel" itemprop="fuelConsumption">
          <strong>City:</strong> 7.8l/100km<strong>Highway:</strong> 6l/100km
        </p>
      </div>
      <div class="middle">
        <img
          width="400"
          height="270"
          src="https://www.globecar.com/wp-content/uploads/2017/09/ccar-400x270.png"
          data-src="https://www.globecar.com/wp-content/uploads/2017/09/ccar-400x270.png"
          class="attachment-medium size-medium wp-post-image lazy loaded"
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
      <div class="bottom">
        <div class="flexcol">
          <div class="description">
            <h3 itemprop="model">Hyundai Accent or similar</h3>
            <p>Starting at $27.95/day</p>
            <ul class="car-features">
              <li class="luggages" itemprop="cargoVolume">
                2
              </li>
              <li class="passengers" itemprop="seatingCapacity">
                4
              </li>
              <li class="transmission" itemprop="vehicleTransmission">
                automatic
              </li>
              <li class="ac" itemprop="additionalProperty">
                air conditioning
              </li>
              <li class="road">Roadside Assistance</li>
              <li class="smokefree">Smoke Free Vehicle</li>
              <li class="gps">Free GPS</li>
              <li class="age">20 years +</li>
            </ul>
          </div>
          <div class="actions">
            <a
              class="button"
              itemprop="url"
              href="https://www.globecar.com/en/vehicles/compact/"
            >
              More
            </a>
            <a
              class="button full"
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
