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


/* Weather API */
document.addEventListener("DOMContentLoaded", function () {
  // OpenWeatherMap API key
  const weatherApiKey = "6cac2bc083844ca2d59a732d59a9de2c"; // Your OpenWeatherMap API key

  // Latitude and longitude coordinates (Dublin, Ireland)
  const lat = 53.349805;
  const lon = -6.26031;
  
  // Weather API URL using latitude and longitude
  const weatherApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${weatherApiKey}`;

  // Select the element where weather information will be displayed
  const weatherInfoElement = document.querySelector('.weather-info');

  // Fetch weather data from the API
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

  // Extract temperature in Kelvin and convert to Celsius
  const temperatureKelvin = data.current.temp;
  const temperatureCelsius = temperatureKelvin - 273.15;

  // Extract other weather information
  const weatherDescription = data.current.weather[0].description;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_speed;
  const pressure = data.current.pressure;
  
  // Update the weather-info div with the retrieved weather data
  weatherInfoElement.innerHTML = `
    <p>Weather: ${weatherDescription}</p>
    <p>Temperature: ${temperatureCelsius.toFixed(2)}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
    <p>Pressure: ${pressure} hPa</p>
  `;
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












