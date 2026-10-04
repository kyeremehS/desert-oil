"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stations } from "@/data/stations";

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(L.latLngBounds(stations.map((s) => [s.lat, s.lng])), { padding: [40, 40] });
  }, [map]);
  return null;
}

export default function StationMap() {
  return (
    <MapContainer
      center={[7.0, -1.2]}
      zoom={6}
      scrollWheelZoom={false}
      className="h-[340px] w-full sm:h-[500px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds />
      {stations.map((s) => (
        <CircleMarker
          key={s.name}
          center={[s.lat, s.lng]}
          radius={10}
          pathOptions={{ color: "#0a1e33", weight: 2, fillColor: "#e1251b", fillOpacity: 1 }}
        >
          <Popup>
            <strong>{s.name}</strong>
            <br />
            {s.area}
            <br />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
