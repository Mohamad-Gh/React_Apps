import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import location from "../../Assets/location.json";
import "../MyGoogleMap/myGoogleMap.css";
import "./googleMap.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const center = { lat: 49.915161, lng: -97.252417 };
const GoogleMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getLanguageAndRegion = (countryCode) => {
    // Determine language and region based on country code
    let language = "en"; // Default language
    let region = "us"; // Default region

    // Add more cases as needed
    switch (countryCode) {
      case "US":
        language = "en";
        region = "us";
        break;
      case "FR":
        language = "fr";
        region = "fr";
        break;
      // Add more cases for other countries
      default:
        // Use default language and region
        break;
    }
    return { language, region };
  };

  // const [hover, hoverSet] = useState(false);

  // set the hovering effect by React
  // function hoverSetter() {
  //   hoverSet(true);
  // }

  return (
    <div className="map">
      {userLocation && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey,
            ...getLanguageAndRegion(userLocation.countryCode),
          }}
          defaultCenter={center}
          defaultZoom={3}
          yesIWantToUseGoogleMapApiInternals={true}
          // hoverDistance={20}
        >
          <LocationOnSharpIcon
            // onMouseEnter={hoverSetter}
            className="userLocation"
            key={0}
            lat={userLocation.lat}
            lng={userLocation.lng}
          />
          {location.locations.map((loc, indx) => (
            <LocationOnSharpIcon
              className="branches"
              key={indx + 1}
              text={loc.city}
              lat={loc.latitude}
              lng={loc.longitude}
            />
          ))}
        </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMap;
