/* Place your JavaScript in this file */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* Weather API Geo coords [53.344, -6.2672] */
/* Geo coords [53.344, -6.2672] */
document.addEventListener("DOMContentLoaded", function () {
  const weatherApiKey = "6cac2bc083844ca2d59a732d59a9de2c"; // Your OpenWeatherMap API key

  // Weather API URL to get weather data directly using city name
  const weatherApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=53.34&lon=-6.26&appid=${weatherApiKey}`;
  const weatherInfoElement = document.querySelector('.weather-info');

  fetch(weatherApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the weather data
      console.log(data); // Example: Log the data to console
      
      // Update the weather-info div with the retrieved weather data
      const weatherDescription = data.current.weather[0].description;
      const temperature = data.current.temp;
      weatherInfoElement.innerHTML = `<p>Weather: ${weatherDescription}</p><p>Temperature: ${temperature}°C</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
});


// Initialize map 1
var map1 = L.map('map1').setView([54.877826, -6.348212], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);
    L.marker([54.877826, -6.348212]).addTo(map1)
      .bindPopup('This is Weekend away 1.')
      .openPopup();


 // Initialize map 2
var map2 = L.map('map2').setView([51.911408, -8.063414], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
L.marker([51.911408, -8.063414]).addTo(map2)
  .bindPopup('This is Weekend away 2.')
  .openPopup(); 

var map = L.map('map3').setView([51.911408, -8.063414], 8); // Example: Castelemartyr Resort, Ireland

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 












