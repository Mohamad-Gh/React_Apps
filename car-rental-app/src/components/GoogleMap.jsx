import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import location from "../Assets/location.json";

const apiKey = { key: "AIzaSyBHKKQ0A4ixBNnyNc0qxEoWCXABhmpu2hU" };
const GoogleMap = (zoomLevel) => {
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

  return (
    <div style={{ height: "400px", width: "400px" }}>
      {userLocation && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBHKKQ0A4ixBNnyNc0qxEoWCXABhmpu2hU",
            ...getLanguageAndRegion(userLocation.countryCode),
          }}
          defaultCenter={userLocation}
          defaultZoom={5}
        >
          <LocationOnSharpIcon
            className="userLocation"
            key={0}
            lat={userLocation.lat}
            lng={userLocation.lng}
          />
          {location.locations.map((loc, indx) => (
            <LocationOnSharpIcon
              className="branches"
              key={indx + 1}
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
