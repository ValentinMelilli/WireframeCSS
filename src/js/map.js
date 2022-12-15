// Define map
const map = L.map("map", {
  zoomControl: false
});

// Load map tiles
L.tileLayer("https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}", {
  attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 2,
  maxZoom: 19,
  noWrap: true,
  accessToken: "OymG7xAvEmOiH8eYl9kwsYpPimZs2Z8cYaW1vtKfrgfuUYYe91eb56Zv8ZgS96WY"
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