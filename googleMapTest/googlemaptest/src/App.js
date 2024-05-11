import { useState } from "react";
import "./App.css";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 49.882114,
  lng: -119.477829,
};
const house = {
  lat: 49.882116,
  lng: -119.477827,
};
const dest = {
  lat: 49.883977,
  lng: -119.422912,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDO2ALzcaWUWQR4Tae8nM2l373yQuaYjRw",
  });
  const [direction, setDirection] = useState();

  function fetchDestination(place) {
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: house,
        destination: place,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirection(result);
        }
      }
    );
  }

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {direction && <DirectionsRenderer directions={direction} />}
      <Marker position={house} />
      <></>
      <Marker
        position={dest}
        onClick={() => {
          fetchDestination(dest);
        }}
      />
    </GoogleMap>
  ) : (
    <div className="App">Hello</div>
  );
}

export default App;
