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

/* 
  Current Weather API 
*/
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

  // Weather API URL using latitude and longitude, and requesting forecast data
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;

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
var map1 = L.map('map1').setView([54.877826, -6.348212], 8); // Example: Galgorm Luxury Resort & Spa, Ballymena, Northern Ireland
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);
L.marker([54.877826, -6.348212]).addTo(map1)
  .bindPopup('This is Galgorm Luxury Resort & Spa.')
  .openPopup();
L.marker([55.17070, -6.72752]).addTo(map1)
.bindPopup('This is Harry`s Shack.')
L.marker([55.1710160929136, -6.731610778284048]).addTo(map1)
.bindPopup('Parking for Port Stewart beach')
L.marker([55.16791, -6.87563]).addTo(map1)
.bindPopup('Parking for Benone beach')

// Add polyline - Port Stewart beach
var latlngs = [
  [55.172211112373844, -6.726923090146396], // Starting point
  [55.16932389557984, -6.745177505837924], // Next point
  [55.16768160916797, -6.768523453366122], // Next point
    // Add more points as needed
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map1);  
// Add a popup label to the polyline
polyline.bindPopup("This is the beach walk")

// Add polyline - Benone beach
var latlngs = [
  [55.19458805432642, -6.956784668828034], // Starting point
  [55.18899505623539, -6.9467258214821035], // Next point
  [55.17855892696065, -6.925351901841416], // Next point
  [55.17304822811428, -6.908479675255773], // Next point
  [55.170448577289754, -6.892760586854266], // Next point
  [55.167952753106874, -6.875827668806084], // Next point
  [55.166485425241284, -6.851094722070124], // Next point
  [55.16704509562195, -6.835042667443787], // Next point
  [55.16801573457866, -6.813679272630311], // Next point
    // Add more points as needed
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map1);  
// Add a popup label to the polyline
polyline.bindPopup("This is the beach walk")

// Initialize map 2
var map2 = L.map('map2').setView([51.911408, -8.063414], 9); // Example: Castlemartyr, Co. Cork
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);
L.marker([51.911408, -8.063414]).addTo(map2)
  .bindPopup('This is Castlemartyr Resort.')
  .openPopup();

  
// Initialize map 3
var map3 = L.map('map3').setView([52.09474497306979, -7.6234525899288], 9); // Example: The Park Hotel, Dungarvan, Co. Waterford

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

L.marker([52.09474497306979, -7.6234525899288]).addTo(map3)
  .bindPopup('This is The Park Hotel.')
  .openPopup();

L.marker([52.09941317016307, -7.537921800491051]).addTo(map3)
  .bindPopup('This is parking A.');

L.marker([52.09460654297441, -7.545316551539263]).addTo(map3)
  .bindPopup('This is parking B.');

L.marker([52.08798858933513, -7.549093981901171]).addTo(map3)
  .bindPopup('This is parking C.');
