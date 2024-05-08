import { useState, useEffect, useCallback, memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import location from "../Assets/location.json";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MyGoogleMap() {
  const [userLocation, setUserLocation] = useState({ lat: "", lng: "" });

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(userLocation);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: userLocation.lat, lng: userLocation.lng }}
      zoom={8}
    >
      <Marker
        key={0}
        icon={LocationOnSharpIcon}
        position={{ lat: userLocation.lat, lng: userLocation.lng }}
      />
      {location.locations.map((loc, indx) => (
        <Marker
          key={indx + 1}
          icon={LocationOnSharpIcon}
          position={{ lat: loc.latitude, lng: loc.longitude }}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MyGoogleMap);
