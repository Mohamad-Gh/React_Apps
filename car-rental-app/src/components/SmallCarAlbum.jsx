import React from "react";
import hyundai from "../Assets/images/Hyundai.png";

function SmallCarAlbum() {
  return (
    <section className="car-album">
      <div className="full-container">
        <div className="container-album">
          <div className="title-header">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="album">
            <div className="cars">
              <div id="Hyundai" className="selected">
                Hyundai Ioniq 6
              </div>
              <div id="chevrolet">Chevrolet Corvette Z06</div>
              <div id="Kia">Kia EV6</div>
              <div id="Audi_A6">Audi A6</div>
              <div id="Audi_All">Audi A6 Allroad</div>
              <div id="BMW">BMW M4 CSL</div>
            </div>
            <div className="car-img">
              <img src={hyundai} />
            </div>
            <div className="car-details">
              <div className="car-details-header">
                <span id="price" className="car-price">
                  45 $
                </span>
                / rent per day
              </div>
              <div className="details-table">
                <div>
                  <span>Model</span>
                  <span>|</span>
                  <span id="model">Audi</span>
                </div>
                <div>
                  <span>Mark</span>
                  <span>|</span>
                  <span id="mark">A1</span>
                </div>
                <div>
                  <span>Year</span>
                  <span>|</span>
                  <span id="year">2012</span>
                </div>
                <div>
                  <span>Doors</span>
                  <span>|</span>
                  <span id="doors">4/5</span>
                </div>
                <div>
                  <span>AC</span>
                  <span>|</span>
                  <span id="ac">yes</span>
                </div>
                <div>
                  <span>Transmission</span>
                  <span>|</span>
                  <span>Automatic</span>
                </div>
                <div>
                  <span>Fuel</span>
                  <span>|</span>
                  <span>Gasoline</span>
                </div>
              </div>
              <div>
                <a>
                  <button className="reserve-btn">Reserve NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmallCarAlbum;
