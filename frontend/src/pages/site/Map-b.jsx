import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../../assets/styles/Mapa.css"

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Mapa />
    </div>
  );
}

function Mapa() {
  return (

    <GoogleMap
      zoom={10}
      center={{ lat: -22.3206508, lng: -49.0681451 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: -22.3206508, lng: -49.0681451 }} />
    </GoogleMap>
  );
}
