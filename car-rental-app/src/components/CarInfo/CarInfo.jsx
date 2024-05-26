import { Link } from "react-router-dom";
import "./carInfo.css";
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
      <div className="full-container">
        <div className="container">
          <div className="carInfoHero">
            <div className="carInfoTitle">
              <h2>{model}</h2>
              <p>Company name or any other detail</p>
            </div>
            <img
              className="carInfoImage"
              src={img}
              alt="car-image"
              itemProp="image"
              decoding="async"
              fetchPriority="high"
              dataSizes="(max-width: 400px) 100vw, 400px"
              sizes="(max-width: 400px) 100vw, 400px"
              data-was-processed="true"
            />
            <div className="carInfoPrice">
              <h3>
                Starting at <strong>{price}</strong>
              </h3>
            </div>
          </div>
          <div className="carInfoHero">
            <div className="divide">
              <div className="carInfoDescription">
                <p>{description}</p>
                <div className="carInfoActions">
                  <Link
                    to="/Vehicle Model/Book Now"
                    className="carInfoBookButton"
                    itemProp="url"
                    href=""
                  >
                    Book now
                  </Link>
                </div>
              </div>
              <div className="carInfoCard">
                <div>
                  <div className="carInfoFeatures">
                    <div className="carInfoModel">
                      <ul className="carInfoFeatureDetails">
                        <li>
                          <div className="gas">
                            <LocalGasStationIcon />
                            <p>
                              <strong>City:</strong> {city}
                              <br></br>
                              <strong>Highway:</strong> {highway}
                            </p>
                          </div>
                        </li>
                        <li>
                          <ul className="carInfoCapacity">
                            <li className="luggages" itemProp="cargoVolume">
                              <LuggageIcon />
                              {luggage}
                            </li>
                            <li
                              className="passengers"
                              itemProp="seatingCapacity"
                            >
                              <PeopleIcon />
                              {passenger}
                            </li>
                          </ul>
                        </li>
                        <li
                          className="transmission"
                          itemProp="vehicleTransmission"
                        >
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
                        <li className="smokeFree">
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
                  </div>
                </div>
              </div>
              <div className="carInfoPictures">
                <h2> More Pictures</h2>
                <ul className="carInfoAlbum">
                  <li>
                    <img
                      className="carPictures"
                      src="https://th.bing.com/th/id/OIP.JBfQl51z11LPdunGQpGGxwAAAA?rs=1&pid=ImgDetMain"
                    />
                  </li>
                  <li>
                    <img className="carPictures" src="" />
                  </li>
                  <li>
                    <img className="carPictures" src="" />
                  </li>
                  <li>
                    <img className="carPictures" src="" />
                  </li>
                  <li>
                    <img className="carPictures" src="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
