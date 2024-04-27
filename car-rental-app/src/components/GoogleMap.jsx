import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import location from "../Assets/location.json";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const apiKey = { key: "AIzaSyBHKKQ0A4ixBNnyNc0qxEoWCXABhmpu2hU" };
const GoogleMap = () => {
  return (
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBHKKQ0A4ixBNnyNc0qxEoWCXABhmpu2hU",
          language: "en",
        }}
        defaultCenter={{ lat: 49.9, lng: -119.41 }}
        defaultZoom={5}
      >
        {location.locations.map((loc, indx) => (
          <LocationOnSharpIcon
            // key={indx}
            className="location"
            lat={loc.latitude}
            lng={loc.longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
