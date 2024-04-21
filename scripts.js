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
var map2 = L.map('map2').setView([53.349805, -6.26031], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);
    L.marker([53.349805, -6.26031]).addTo(map2)
      .bindPopup('This is Weekend away 2.')
      .openPopup(); 

var map = L.map('map3').setView([53.349805, -6.26031], 10); // Example: Dublin, Ireland

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);  

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

