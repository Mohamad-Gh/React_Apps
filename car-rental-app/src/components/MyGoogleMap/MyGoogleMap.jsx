import { useState, useEffect, useCallback, memo, useMemo, useRef } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import "./myGoogleMap.css";
import brancehs from "../../Assets/location.json";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MyGoogleMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [direction, setDirectoin] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const mapRef = useRef();

  useEffect(() => {
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

  function fetchDirection(place) {
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: userLocation,
        destination: place,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectoin(result);
          console.log(result.routes[0].legs[0].distance.text);
        }
      }
    );
  }

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation}
      zoom={8}
    >
      {direction && <DirectionsRenderer directions={direction} />}

      <Marker position={userLocation} />
      {brancehs.locations.map((location, indx) => (
        <Marker
          key={indx}
          position={{ lat: location.latitude, lng: location.longitude }}
          onClick={() => {
            fetchDirection({ lat: location.latitude, lng: location.longitude });
          }}
          onLoad={onLoad}
        />
      ))}
    </GoogleMap>
  ) : (
    <h1>Loading ...</h1>
  );
}

export default MyGoogleMap;
