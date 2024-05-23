import { Link } from "react-router-dom";
import "../CarCard/CarCard.css";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LuggageIcon from "@mui/icons-material/Luggage";
import PeopleIcon from "@mui/icons-material/People";
import MemoryIcon from "@mui/icons-material/Memory";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SupportIcon from "@mui/icons-material/Support";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";

function CarInfo({
  city,
  highway,
  AC,
  gps,
  luggage,
  passenger,
  price,
  model,
  img,
  RA,
  smoke,
  transmission,
  description,
}) {
  return (
    <div>
      <div>
        <div>
          <h2>{model}</h2>
          <p>Company name or any other detail</p>
        </div>
        <h3>
          Starting at <strong>{price}</strong>
        </h3>
        <img
          src={img}
          className="attachment-medium size-medium wp-post-image lazy loaded"
          alt="car-image"
          itemProp="image"
          decoding="async"
          fetchPriority="high"
          dataSizes="(max-width: 400px) 100vw, 400px"
          sizes="(max-width: 400px) 100vw, 400px"
          data-was-processed="true"
        />
      </div>
      <div>
        <div>
          <p>{description}</p>
          <button>Book this </button>
        </div>
        <div className="flexCarCards">
          <div className="modelCard">
            <h2 itemProp="catagory">{model}</h2>
            <div className="modelCard-p">
              <p>
                <strong>City:</strong> {city}
                <br></br>
                <strong>Highway:</strong> {highway}
              </p>
              <LocalGasStationIcon className="gas" />
            </div>
          </div>
          <div className="bottomCard">
            <div className="carFeatures">
              <div className="carModel">
                {/* <h3 itemProp="model">{description}</h3> */}

                <ul className="featureDetails">
                  <li>
                    <ul className="capacity">
                      <li className="luggages" itemProp="cargoVolume">
                        <LuggageIcon />
                        {luggage}
                      </li>
                      <li className="passengers" itemProp="seatingCapacity">
                        <PeopleIcon />
                        {passenger}
                      </li>
                    </ul>
                  </li>
                  <li className="transmission" itemProp="vehicleTransmission">
                    <MemoryIcon /> {transmission}
                  </li>
                  <li className="ac" itemProp="additionalProperty">
                    <AcUnitIcon />
                    {AC}
                  </li>
                  <li className="road">
                    <SupportIcon />
                    Road Assistant: {RA}
                  </li>
                  <li className="smokefree">
                    <SmokeFreeIcon />
                    Smoke Free Vehicle:{smoke}
                  </li>
                  <li className="gps">
                    <GpsFixedIcon />
                    Free GPS: {gps}
                  </li>
                  <li className="age">
                    <CreditCardIcon />
                    20 years +
                  </li>
                </ul>
              </div>
              <div className="actions">
                <Link
                  to="/Vehicle Model/Book Now"
                  className="bookButton"
                  itemProp="url"
                  href=""
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
