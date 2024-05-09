import { useState, useEffect, useCallback, memo, useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import location from "../Assets/location.json";
import "./myGoogleMap.css";

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

  const centerMap = useMemo(
    () => ({ lat: userLocation.lat, lng: userLocation.lng }),
    []
  );
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={centerMap} zoom={8}>
      <div className="userLocation">
        <Marker
          key={0}
          // icon={LocationOnSharpIcon}
          position={{ lat: userLocation.lat, lng: userLocation.lng }}
        />
      </div>
      {location.locations.map((loc, indx) => (
        <Marker
          key={indx + 1}
          // icon={}
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
