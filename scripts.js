/* 
  Place your JavaScript in this file 
*/

/* 
  Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
*/
function toggleResponsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Initialize map 1
var map1 = L.map('map1').setView([54.877826, -6.348212], 8); // Example: Galgorm Luxury Resort & Spa, Ballymena, Northern Ireland
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.marker([54.877826, -6.348212]).addTo(map1)
  .bindPopup('Hotel')
  .openPopup();
L.marker([55.17070, -6.72752]).addTo(map1)
  .bindPopup('This is Harry`s Shack.')
L.marker([55.1710160929136, -6.731610778284048]).addTo(map1)
  .bindPopup('Parking for Port Stewart beach')
L.marker([55.16791, -6.87563]).addTo(map1)
  .bindPopup('Parking for Benone beach')
L.marker([55.16634339422888, -6.820533496809242]).addTo(map1)
  .bindPopup('Very small parking for Benone beach')
L.marker([55.1662169985367, -6.820683700515766]).addTo(map1)
  .bindPopup('Public toilets')

// Add polyline - Port Stewart beach
var latlngs1 = [
  [55.172211112373844, -6.726923090146396], // Starting point
  [55.16932389557984, -6.745177505837924], // Next point
  [55.16768160916797, -6.768523453366122], // Next point
  // Add more points as needed
];
var polyline1 = L.polyline(latlngs1, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline1.bindPopup("This is the beach walk")

// Add polyline - Benone beach
var latlngs2 = [
  [55.19458805432642, -6.956784668828034], // Starting point
  [55.18899505623539, -6.9467258214821035], // Next point
  [55.17855892696065, -6.925351901841416], // Next point
  [55.17304822811428, -6.908479675255773], // Next point
  [55.170448577289754, -6.892760586854266], // Next point
  [55.167952753106874, -6.875827668806084], // Next point
  [55.166485425241284, -6.851094722070124], // Next point
  [55.1668370984854, -6.834557135743481], // Next point
  [55.16801573457866, -6.813679272630311], // Next point
  // Add more points as needed
];
var polyline2 = L.polyline(latlngs2, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline2.bindPopup("This is the beach walk")


// Add satellite tile layer
var satelliteLayer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri'
}).addTo(map1);

// Add street tile layer as the default layer
var streetLayer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map1);

// Create a base layers object for easy toggling
var baseLayers1 = {
  "Satellite": satelliteLayer1,
  "Streets": streetLayer1
};

// Add a layer control to the map
L.control.layers(baseLayers1).addTo(map1);


// Initialize map 2
var map2 = L.map('map2').setView([51.911408, -8.063414], 9); // Example: Castlemartyr, Co. Cork
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
L.marker([51.911408, -8.063414]).addTo(map2)
  .bindPopup('Hotel')
  .openPopup();

// Add satellite tile layer
var satelliteLayer2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri'
}).addTo(map2);

// Add street tile layer as the default layer
var streetLayer2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map2);

// Create a base layers object for easy toggling
var baseLayers2 = {
  "Satellite": satelliteLayer2,
  "Streets": streetLayer2
};

// Add a layer control to the map
L.control.layers(baseLayers2).addTo(map2);


// Initialize map 3
var map3 = L.map('map3').setView([52.09474497306979, -7.6234525899288], 9); // Example: The Park Hotel, Dungarvan, Co. Waterford

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

L.marker([52.09474497306979, -7.6234525899288]).addTo(map3)
  .bindPopup('Hotel.')
  .openPopup();

L.marker([52.09941317016307, -7.537921800491051]).addTo(map3)
  .bindPopup('This is parking A.');

L.marker([52.09460654297441, -7.545316551539263]).addTo(map3)
  .bindPopup('This is parking B.');

L.marker([52.08798858933513, -7.549093981901171]).addTo(map3)
  .bindPopup('This is parking C.');

// Add satellite tile layer
var satelliteLayer3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri'
}).addTo(map3);

// Add street tile layer as the default layer
var streetLayer3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map3);

// Create a base layers object for easy toggling
var baseLayers3 = {
  "Satellite": satelliteLayer3,
  "Streets": streetLayer3
};

// Add a layer control to the map
L.control.layers(baseLayers3).addTo(map3);

/*
// Add GPX file
var gpx1 ="GPX_files\Galgorm_river_walk_1.gpx"; // Path to your GPX file
new L.GPX(gpx1, {
    async: true,
}).on('loaded', function(e) {
    map1.fitBounds(e.target.getBounds());
}).addTo(map1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

var gpx1 = "GPX_files\Galgorm_river_walk_1.gpx"; // Path to your GPX file

new L.GPX(
  gpx1,
  {
    async: true,
    marker_options: {
      startIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png',
      endIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png',
      shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png'
    }
  }
).on('loaded', function (e) {
  map1.fitBounds(e.target.getBounds());
}).addTo(map1);
*/
