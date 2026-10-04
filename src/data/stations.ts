export interface Station {
  name: string;
  area: string;
  lat: number;
  lng: number;
}

// Coordinates are approximate, pin-level accuracy comes with the
// official survey. Popups link out to Google Maps for directions.
export const stations: Station[] = [
  { name: "Achimota Head Office", area: "Accra, Greater Accra", lat: 5.6155, lng: -0.2337 },
  { name: "Aboabo", area: "Tafo, Ashanti", lat: 6.7056, lng: -1.5853 },
  { name: "Prang", area: "Bono East", lat: 7.9938, lng: -0.8842 },
];
