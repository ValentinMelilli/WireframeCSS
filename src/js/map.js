// Define map
const map = L.map("map", {
  zoomControl: false
});

// Load map tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 2,
    maxZoom: 19,
}).addTo(map);

// Set zoom button to bottom right
L.control.zoom({position: "bottomright"}).addTo(map);

// Define gas pump icon
const gasPumpIcon = L.icon({
  iconUrl: './img/GasPump.png',
  iconSize:     [45, 50],
  iconAnchor:   [22.5, 50],
  popupAnchor:  [0, -55]
});