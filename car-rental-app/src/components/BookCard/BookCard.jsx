import { Link } from "react-router-dom";
import ReviewButton from "../ReviewButton/ReviewButton";

import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LuggageIcon from "@mui/icons-material/Luggage";
import PeopleIcon from "@mui/icons-material/People";
import MemoryIcon from "@mui/icons-material/Memory";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SupportIcon from "@mui/icons-material/Support";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";

import "./bookCard.css";

function BookCard(props) {
  return (
    // passing onClick props so can be used in parrent component
    <div id={props.id} className="flexBookCards">
      <div className="modelBookCard">
        <img
          src={props.img}
          className="imageBookCard"
          alt="ccar"
          itemProp="image"
          decoding="async"
          fetchpriority="high"
          data-sizes="(max-width: 400px) 100vw, 400px"
          sizes="(max-width: 400px) 100vw, 400px"
          data-was-processed="true"
        />
        <div className="bookCardInfo">
          <div className="nameReview">
            <h2 itemProp="catagory">{props.model}</h2>
            <ReviewButton color={props.color} number={props.number} />
          </div>
          <ul>
            <li>Free roadside assistance included</li>
            <li>Unlimited Kms available</li>
            <li>Free cancellation up to 48 hours before pick-up</li>
            <li>
              <Link to="/Vehicle Model/More Info">See more features</Link>
            </li>
          </ul>
        </div>
        <div className="price">
          <div className="priceTag">
            <h2>Price: </h2>
            <div className="priceInTotal">
              <p>
                Base ({props.days} days): <strong>$ {props.basePrice}</strong>
              </p>
              <p>
                Additional Driver: <strong>$ {props.driverPrice}</strong>
              </p>
              <p>
                Booster Seat: <strong>$ {props.boosterPrice}</strong>
              </p>
              <p>
                Baby Seat: <strong>$ {props.babySeatPrice}</strong>
              </p>{" "}
              <p>
                Extra Mileage: <strong>$ {props.extraMileagePrice}</strong>
              </p>
              <div className="narrowDivider"></div>
              <strong>Total Price: $ {props.totalPrice}</strong>
              <br></br>
              <small>+ Taxes and fees</small>
            </div>
          </div>
        </div>
      </div>
      <div className="middleBookCard"></div>
      <div>
        <div className="carBookModel">
          {/* <h3 itemProp="model">{props.description}</h3> */}
          <ul className="featureBookDetails">
            <li className="modelBookCard-p">
              <LocalGasStationIcon className="gas" />
              <p>
                <strong>City:</strong> {props.city}
                <br></br>
                <strong>Highway:</strong> {props.highway}
              </p>
            </li>
            <li>
              <ul className="capacity">
                <li className="luggages" itemProp="cargoVolume">
                  <LuggageIcon />
                  {props.luggage}
                </li>
                <li className="passengers" itemProp="seatingCapacity">
                  <PeopleIcon />
                  {props.passenger}
                </li>
              </ul>
            </li>
            <li className="transmission" itemProp="vehicleTransmission">
              <MemoryIcon /> {props.transmission}
            </li>
            <li className="ac" itemProp="additionalProperty">
              <AcUnitIcon />
              {props.AC}
            </li>
            <li className="road">
              <SupportIcon />
              Road Assistant: {props.RA}
            </li>
            <li className="smokeFree">
              <SmokeFreeIcon />
              Smoke Free Vehicle:{props.smoke}
            </li>
            <li className="gps">
              <GpsFixedIcon />
              Free GPS: {props.gps}
            </li>
            <li className="age">
              <CreditCardIcon />
              20 years +
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
