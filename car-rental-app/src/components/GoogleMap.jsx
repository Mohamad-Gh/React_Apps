import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ apiKey }) => {
  return (
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={49.912578} lng={-119.39767} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
