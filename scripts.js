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

// Initialize map with fractional zoom
var map1 = L.map('map1', {
  center: [53.5, -8.0],
  zoom: 6.5, // Set the zoom level to a decimal value
  zoomSnap: 0.5, // Allow zooming in smaller increments
  zoomDelta: 0.5 // Allow zooming in smaller steps when using controls
});


// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

// Define a custom hotel icon using Font Awesome
var hotel_icon = L.divIcon({
  className: 'hotel-icon',
  html: '<i class="fa fa-map-marker" style="color: green; font-size: 24px;"></i>',
  iconSize: [25, 41]
});

// Define a custom restaurant icon using Font Awesome
var restaurant_icon = L.divIcon({
  className: 'restaurant-icon',
  html: '<i class="fa fa-map-marker" style="color: yellow; font-size: 24px;"></i>',
  iconSize: [25, 41]
});

// Define a custom POI icon using Font Awesome
var poi_icon = L.divIcon({
  className: 'custom-icon',
  html: '<i class="fa fa-map-marker" style="color: blue; font-size: 24px;"></i>',
  iconSize: [25, 41]
});

//Galgorm Luxury Resort & Spa, Ballymena, Northern Ireland
L.marker([54.877826, -6.348212], { icon: hotel_icon }).addTo(map1)
  .bindPopup('Galgorm Luxury Resort & Spa, Ballymena, Northern Ireland');
L.marker([55.17070, -6.72752], { icon: restaurant_icon }).addTo(map1)
  .bindPopup('This is Harry`s Shack.');
L.marker([55.1710160929136, -6.731610778284048], { icon: poi_icon }).addTo(map1)
  .bindPopup('Parking for Port Stewart beach');
L.marker([55.16791, -6.87563], { icon: poi_icon }).addTo(map1)
  .bindPopup('Parking for Benone beach');
L.marker([55.16634339422888, -6.820533496809242], { icon: poi_icon }).addTo(map1)
  .bindPopup('Very small parking for Benone beach');
L.marker([55.1662169985367, -6.820683700515766], { icon: poi_icon }).addTo(map1)
  .bindPopup('Public toilets');

//Castlemartyr, Co. Cork
L.marker([51.911408, -8.063414], { icon: hotel_icon })
  .addTo(map1)
  .bindPopup('Castlemartyr Resort, Co. Cork');

//The Park Hotel, Dungarvan, Co. Waterford.
L.marker([52.09474497306979, -7.6234525899288], { icon: hotel_icon })
  .addTo(map1)
  .bindPopup('The Park Hotel, Dungarvan, Co. Waterford.');
L.marker([52.09941317016307, -7.537921800491051], { icon: poi_icon }).addTo(map1)
  .bindPopup('This is parking A.');
L.marker([52.09460654297441, -7.545316551539263], { icon: poi_icon }).addTo(map1)
  .bindPopup('This is parking B.');
L.marker([52.08798858933513, -7.549093981901171], { icon: poi_icon }).addTo(map1)
  .bindPopup('This is parking C.');

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

// Add polyline - Clonea beach
var latlngs3 = [
  [52.087239757636205, -7.548554694350869], // Starting point
  [52.09028734816996, -7.547634434575302],// Next point
  [52.09417849740923, -7.544801576869848],// Next point
  [52.09570825805809, -7.543935480275909],// Next point
  [52.09699410321894, -7.542113068633789],// Next point
  [52.09911123297765, -7.538305852202822],// Next point
  // Add more points as needed  
];
var polyline3 = L.polyline(latlngs3, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline3.bindPopup("This is the beach walk")

//MAP CONTROLS
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

/*

// ADD GPX FILE
var gpxFileUrl = 'GPX_files/Galgorm_river_walk_1.gpx'; // Replace with the actual path to your GPX file
new L.GPX(gpxFileUrl, {
  async: true,
  marker_options: {
    startIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-icon-start.png',
    endIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-icon-end.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-shadow.png'
  }
}).on('loaded', function(e) {
  map1.fitBounds(e.target.getBounds());
}).addTo(map1); 


// Add GPX file
var gpx1 ="GPX_files/Galgorm_river_walk_1.gpx"; // Path to your GPX file
new L.GPX(gpx1, {
    async: true,
}).on('loaded', function(e) {
    map1.fitBounds(e.target.getBounds());
}).addTo(map1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);


var gpx1 = "GPX_files/Galgorm_river_walk_1.gpx"; // Path to your GPX file

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