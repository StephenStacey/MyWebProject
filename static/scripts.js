/* 
  Place your JavaScript in this file 
*/

/* 
  Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
*/
function toggleResponsiveNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Search function
function jumpToKeyword() {
  // Get the search input value
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  
  // Return early if searchTerm is empty
  if (searchTerm === "") {
    alert('Please enter a search term');
    return;
  }

  // Get all text nodes within the <main> element
  const mainContent = document.querySelector('main');
  const textNodes = [];

  // Function to recursively get all text nodes
  function getTextNodes(element) {
    if (element.nodeType === Node.TEXT_NODE && element.textContent.trim()) {
      textNodes.push(element);
    } else if (element.nodeType === Node.ELEMENT_NODE) {
      element.childNodes.forEach(getTextNodes);
    }
  }

  getTextNodes(mainContent);

  // Find the first occurrence of the search term
  let found = false;
  for (const node of textNodes) {
    const textContent = node.textContent.toLowerCase();
    const index = textContent.indexOf(searchTerm);

    if (index !== -1) {
      const range = document.createRange();
      const selection = window.getSelection();
      
      // Set the range to the first occurrence
      range.setStart(node, index);
      range.setEnd(node, index + searchTerm.length);
      
      // Clear previous selections and add new one
      selection.removeAllRanges();
      selection.addRange(range);
      
      // Scroll into view
      const rect = range.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 100, // Offset for better visibility
        behavior: 'smooth'
      });
      
      found = true;
      break;
    }
  }

  // Alert if no matches found
  if (!found) {
    alert('No matches found');
  }
}


// Initialize map with fractional zoom
let map1 = L.map('map1', {
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
let hotel_icon = L.divIcon({
  className: 'hotel-icon',
  html: '<i class="fa fa-map-marker" style="color: green; font-size: 20px;"></i>', // Green color
  iconSize: [15, 29] // Adjust size as needed
});

// Define a custom restaurant icon using Font Awesome
let restaurant_icon = L.divIcon({
  className: 'restaurant-icon',
  html: '<i class="fa fa-map-marker" style="color: orange; font-size: 20px;"></i>', // Dark color
  iconSize: [15, 29] // Adjust size as needed
});

// Define a custom Point of Interest (POI) icon using Font Awesome
let poi_icon = L.divIcon({
  className: 'POI-icon',
  html: '<i class="fa fa-map-marker" style="color: blue; font-size: 20px;"></i>', // Blue color
  iconSize: [15, 29] // Adjust size as needed
});

// Define a custom line icon using SVG
let line_icon = L.divIcon({
  className: 'line-icon',
  html: '<svg width="30" height="2"><rect width="15" height="2" style="fill:red;"></rect></svg>', // SVG for the line
  iconSize: [30, 2] // Adjust size to fit the line
});

// Add Legend
let legend = L.control({ position: 'bottomright' });
legend.onAdd = function (map) {
  let div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<i class="fa fa-map-marker" style="color: green; font-size: 12px;"></i> Hotel<br>';
  div.innerHTML += '<i class="fa fa-map-marker" style="color: orange; font-size: 12px;"></i> Restaurant<br>';
  div.innerHTML += '<i class="fa fa-map-marker" style="color: blue ; font-size: 12px;"></i> POI<br>';
  div.innerHTML += '<svg width="30" height="2"><rect width="15" height="2" style="fill:red;"></rect></svg> Walk<br>'; // Red line for Walk
  return div;
};
legend.addTo(map1);


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
let latlngs1 = [
  [55.172211112373844, -6.726923090146396], // Starting point
  [55.16932389557984, -6.745177505837924], // Next point
  [55.16768160916797, -6.768523453366122], // Next point
  // Add more points as needed
];
let polyline1 = L.polyline(latlngs1, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline1.bindPopup("This is the beach walk")

// Add polyline - Benone beach
let latlngs2 = [
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
let polyline2 = L.polyline(latlngs2, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline2.bindPopup("This is the beach walk")

// Add polyline - Clonea beach
let latlngs3 = [
  [52.087239757636205, -7.548554694350869], // Starting point
  [52.09028734816996, -7.547634434575302],// Next point
  [52.09417849740923, -7.544801576869848],// Next point
  [52.09570825805809, -7.543935480275909],// Next point
  [52.09699410321894, -7.542113068633789],// Next point
  [52.09911123297765, -7.538305852202822],// Next point
  // Add more points as needed  
];
let polyline3 = L.polyline(latlngs3, { color: 'red' }).addTo(map1);
// Add a popup label to the polyline
polyline3.bindPopup("This is the beach walk")

//MAP CONTROLS
// Add satellite tile layer
let satelliteLayer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri'
}).addTo(map1);
// Add street tile layer as the default layer
let streetLayer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map1);
// Create a base layers object for easy toggling
let baseLayers1 = {
  "Satellite": satelliteLayer1,
  "Streets": streetLayer1
};
// Add a layer control to the map
L.control.layers(baseLayers1).addTo(map1);

//BESPOKE XY AND ZOOM LEVEL
// Function to get URL parameters
function getQueryParams() {
  let params = {};
  let queryString = window.location.search.substring(1);
  let regex = /([^&=]+)=([^&]*)/g;
  let m;

  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return params;
}

// Parse the parameters
let params = getQueryParams();
let lat = parseFloat(params.lat) || 53.3;
let lng = parseFloat(params.lng) || -8.0;
let zoom = parseInt(params.zoom) || 6.5;

// Set the map view based on the parameters
map1.setView([lat, lng], zoom);

// Add GPX file
let gpxFileUrl = 'GPX_files/Galgorm_river_walk_1.gpx'; // Replace with the actual path to your GPX file

new L.GPX(gpxFileUrl, {
  async: true,
  marker_options: {
    startIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-icon-start.png',
    endIconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-icon-end.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/images/pin-shadow.png'
  },
  polyline_options: {
    color: 'red' // Set the line color to red
  }
}).on('loaded', function (e) {
  if (!mapViewSet) {
    map1.fitBounds(e.target.getBounds());
  }
}).addTo(map1);

// Helper function to safely escape HTML
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


function editComment(commentId) {
  const listItem = document.querySelector(`[data-id="${commentId}"]`);
  if (!listItem) {
      console.error(`List item with data-id="${commentId}"] not found.`);
      return;
  }

  const strongElement = listItem.querySelector('strong');
  if (!strongElement) {
      console.error('Strong element not found.');
      return;
  }

  // Get the current comment text from the text node after the strong element
  const commentText = strongElement.nextSibling ? strongElement.nextSibling.nodeValue.trim() : '';

  if (!commentText) {
      console.error('Comment text not found or empty.');
      return;
  }

  // Save the original comment text in a data attribute
  listItem.setAttribute('data-original-comment', commentText);

  // Create the input field
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.value = commentText;

  // Replace the text node with the input field
  const textNode = strongElement.nextSibling;
  strongElement.parentNode.replaceChild(input, textNode);

  // Change the Edit button to a Save button
  const editButton = listItem.querySelector('.btn-primary');
  if (editButton) {
      editButton.textContent = 'Save';
      editButton.classList.remove('btn-primary');
      editButton.classList.add('btn-success');

      // Replace event listener with save action
      editButton.onclick = () => saveComment(commentId);

      // Create the Cancel button
      const cancelButton = document.createElement('button');
      cancelButton.className = 'btn btn-sm btn-secondary'; 
      cancelButton.textContent = 'Cancel';
      cancelButton.style.marginRight = '8px';  // Add explicit right margin
      cancelButton.onclick = () => cancelEdit(commentId);

      // Insert the Cancel button before the Save button
      editButton.parentNode.insertBefore(cancelButton, editButton);
  }
}


function saveComment(commentId) {
  const listItem = document.querySelector(`[data-id="${commentId}"]`);
  const input = listItem.querySelector('input');
  const updatedComment = input.value.trim();

  if (!updatedComment) {
      alert('Comment cannot be empty.');
      return;
  }

  // Send the updated comment to the server
  fetch('/update-comment', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id: commentId,
          comment: updatedComment
      })
  }).then(response => response.json())
      .then(data => {
          if (data.success) {
              const strongElement = listItem.querySelector('strong');

              // Remove the input field
              input.remove();

              // Create a new text node with the updated comment and append it after the strong element
              const updatedTextNode = document.createTextNode(` ${updatedComment}`);
              strongElement.parentNode.appendChild(updatedTextNode);

              // Change the Save button back to an Edit button
              const saveButton = listItem.querySelector('.btn-success');
              if (saveButton) {
                  saveButton.textContent = 'Edit';
                  saveButton.classList.remove('btn-success');
                  saveButton.classList.add('btn-primary');
                  saveButton.onclick = () => editComment(commentId);
              }

              // Remove the Cancel button
              const cancelButton = listItem.querySelector('.btn-secondary');
              if (cancelButton) {
                  cancelButton.remove();
              }

              console.log('Comment updated successfully.');
          } else {
              console.error('Failed to update comment:', data.message);
              alert('Failed to update comment.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while updating the comment.');
      });
}


function cancelEdit(commentId) {
  const listItem = document.querySelector(`[data-id="${commentId}"]`);
  if (!listItem) {
      console.error(`List item with data-id="${commentId}"] not found.`);
      return;
  }

  // Retrieve the original comment text from the data attribute
  const originalComment = listItem.getAttribute('data-original-comment');
  if (!originalComment) {
      console.error('Original comment text not found.');
      return;
  }

  const strongElement = listItem.querySelector('strong');
  const input = listItem.querySelector('input');
  if (input) {
      input.remove();
  }

  // Restore the original text node
  const originalTextNode = document.createTextNode(` ${originalComment}`);
  strongElement.parentNode.appendChild(originalTextNode);

  // Change the Save button back to an Edit button
  const saveButton = listItem.querySelector('.btn-success');
  if (saveButton) {
      saveButton.textContent = 'Edit';
      saveButton.classList.remove('btn-success');
      saveButton.classList.add('btn-primary');
      saveButton.onclick = () => editComment(commentId);
  }

  // Remove the Cancel button
  const cancelButton = listItem.querySelector('.btn-secondary');
  if (cancelButton) {
      cancelButton.remove();
  }
}


function deleteComment(commentId) {
  if (confirm('Are you sure you want to delete this comment?')) {
      const listItem = document.querySelector(`[data-id="${commentId}"]`);
      if (!listItem) {
          console.error(`List item with data-id="${commentId}" not found.`);
          return;
      }

      const deleteButton = listItem.querySelector('.btn-danger');
      if (deleteButton) {
          deleteButton.disabled = true;
      }

      fetch('/delete-comment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: commentId
          })
      }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  // Remove the comment from the UI
                  listItem.remove();
                  console.log('Comment deleted successfully.');
              } else {
                  console.error('Failed to delete comment:', data.message);
                  alert('Failed to delete comment.');
              }
          }).catch(error => {
              console.error('Error:', error);
              alert('An error occurred while deleting the comment.');
          }).finally(() => {
              if (deleteButton && !data.success) {
                  deleteButton.disabled = false;
              }
          });
  }
}
