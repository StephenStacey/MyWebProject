/* Place your JavaScript in this file */

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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* Weather API*/
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "4YCIyPkczORtahmyKhf2zwsnmy6Irl3g"; // Get your API key from AccuWeather
  const cityKey = "207931"; // Get your city key from AccuWeather
  const apiUrl = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&details=true`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.querySelector('.weather-info');
      const weather = data[0];
      weatherInfo.innerHTML = `
        <h2>${weather.LocalObservationDateTime}</h2>
        <p>${weather.WeatherText}</p>
        <p>Temperature: ${weather.Temperature.Metric.Value}°${weather.Temperature.Metric.Unit}</p>
        <p>Relative Humidity: ${weather.RelativeHumidity}%</p>
        <p>Wind Speed: ${weather.Wind.Speed.Metric.Value} ${weather.Wind.Speed.Metric.Unit}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.querySelector('.weather-info');
      weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
    });
});



