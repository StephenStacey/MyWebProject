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


/* Current Weather API */
document.addEventListener("DOMContentLoaded", function () {
  // OpenWeatherMap API key
  const weatherApiKey = "6cac2bc083844ca2d59a732d59a9de2c"; // Your OpenWeatherMap API key

  // Latitude and longitude coordinates (Dublin, Ireland)
  const lat = 53.349805;
  const lon = -6.26031;

  // Generate a unique cache-busting parameter
  const cacheBuster = new Date().getTime(); // Current timestamp

  // Weather API URL using latitude and longitude
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&cb=${cacheBuster}`;

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
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = temperatureKelvin - 273.15;

          // Extract other weather information
          const weatherDescription = data.weather[0].description;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
          const pressure = data.main.pressure;

          // Update the weather-info div with the retrieved weather data
          weatherInfoElement.innerHTML = `
          <div class="card-header">
          <h5 class="card-title">Current Weather - Dublin</h5>
          </div>
          <div class="card-body">
          <p>Weather: ${weatherDescription}</p>
          <p>Temperature: ${temperatureCelsius.toFixed(2)}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Pressure: ${pressure} hPa</p>
          </div>
  `;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
});


/* 
  Forecast Weather API
*/

document.addEventListener("DOMContentLoaded", function () {
  // OpenWeatherMap API key
  const weatherApiKey = "6cac2bc083844ca2d59a732d59a9de2c"; // Your OpenWeatherMap API key

  // Latitude and longitude coordinates (Dublin, Ireland)
  const lat = 53.349805;
  const lon = -6.26031;

  // Generate a unique cache-busting parameter
  const cacheBuster = new Date().getTime(); // Current timestamp

  // Weather API URL using latitude and longitude, and requesting forecast data
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&cb=${cacheBuster}`;

  // Select the element where weather information will be displayed
  const weatherInfoElement = document.querySelector('.forecast-weather-info');

  // Fetch weather forecast data from the API
  fetch(weatherApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Handle the weather forecast data
          console.log(data); // Example: Log the data to console

          // Extract and display forecast data for each day (5 days)
          for (let i = 0; i < 5; i++) {
              const forecast = data.list[i * 8]; // Get forecast for every 8th entry (3-hour interval * 8 = 24 hours/day)
              const date = new Date(forecast.dt * 1000); // Convert timestamp to date object
              const temperatureKelvin = forecast.main.temp;
              const temperatureCelsius = temperatureKelvin - 273.15;
              const weatherDescription = forecast.weather[0].description;
              const humidity = forecast.main.humidity;
              const windSpeed = forecast.wind.speed;
              const pressure = forecast.main.pressure;

              // Create a new card for each forecast day
              const card = document.createElement('div');
              card.classList.add('card');
              card.innerHTML = `
                  <div class="card-header">
                      <h5 class="card-title">Weather Forecast - Dublin - ${date.toDateString()}</h5>
                  </div>
                  <div class="card-body">
                      <p>Forecast: ${weatherDescription}</p>
                      <p>Temperature: ${temperatureCelsius.toFixed(2)}°C</p>
                      <p>Humidity: ${humidity}%</p>
                      <p>Wind Speed: ${windSpeed} m/s</p>
                      <p>Pressure: ${pressure} hPa</p>
                  </div>
              `;
              // Append the card to the weather-info element
              weatherInfoElement.appendChild(card);
          }
      })
      .catch(error => {
          console.error('Error fetching weather forecast data:', error);
      });
});



// Initialize map 1
var map1 = L.map('map1').setView([54.877826, -6.348212], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);
    L.marker([54.877826, -6.348212]).addTo(map1)
      .bindPopup('This is Galgorm Luxury Resort & Spa.')
      .openPopup();



 // Initialize map 2
var map2 = L.map('map2').setView([51.911408, -8.063414], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
L.marker([51.911408, -8.063414]).addTo(map2)
  .bindPopup('This is Castlemartyr Resort.')
  .openPopup(); 

var map = L.map('map3').setView([51.911408, -8.063414], 8); // Example: Castelemartyr Resort, Ireland

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 