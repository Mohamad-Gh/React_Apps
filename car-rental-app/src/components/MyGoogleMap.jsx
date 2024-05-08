import { useState, useEffect, useCallback, memo } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import location from "../Assets/location.json";
import { useLocation } from "react-router-dom";
import { colors } from "@mui/material";

const containerStyle = {
  width: "400px",
  height: "400px",
  colors: "blue",
};

function MyGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });
  const [map, setMap] = useState(null);

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

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(userLocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: userLocation.lat, lng: userLocation.lng }}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        key={0}
        icon={LocationOnSharpIcon}
        position={{ lat: userLocation.lat, lng: userLocation.lng }}
      />
      {location.locations.map((loc, indx) => (
        <MarkerF
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
