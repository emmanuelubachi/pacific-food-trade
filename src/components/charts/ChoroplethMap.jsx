import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ChoroplethMap() {
  return <Map style={{ height: "90vh" }} zoom={2} center={[20, 100]}></Map>;
}
