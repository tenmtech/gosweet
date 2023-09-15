import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  height: 350,
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  padding: 0,
};

const center = {
  lat: 45.78325,
  lng: 24.16466,
};

function MapPreview() {
  return (
    <>
      <div className="h-full w-full flex-1" id="map">
        <LoadScript googleMapsApiKey="AIzaSyABqnNdLOa7aIOEqi-G9TKuE1938SKurO4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}

export default React.memo(MapPreview);
