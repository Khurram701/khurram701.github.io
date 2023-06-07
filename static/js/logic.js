// // let newYorkCoords = [40.73, -74.0059];
// // let mapZoomLevel = 12;

// // Create the createMap function.
// function createMap(coords, zoomLevel) {
//   // Create a new map instance
//   const map = new Map();

//   // Set the center coordinates and zoom level of the map
//   map.setCenter(coords);
//   map.setZoom(zoomLevel);

//   // Additional code for customizing the map and adding markers, overlays, etc.

//   // Return the map instance
//   return map;
// }


//   // Create the tile layer that will be the background of our map.

//   function createMap(coords, zoomLevel) {
//     // Create a new map instance
//     const map = L.map('map');
  
//     // Set the center coordinates and zoom level of the map
//     map.setView(coords, zoomLevel);
  
//     // Create the tile layer and add it to the map
//     const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       maxZoom: 18,
//     }).addTo(map);
  
//     // Additional code for customizing the map and adding markers, overlays, etc.
  
//     // Return the map instance
//     return map;
//   }
  
//   // Create a baseMaps object to hold the lightmap layer.
//   function createMap(coords, zoomLevel) {
//     // Create a new map instance
//     const map = L.map('map');
  
//     // Set the center coordinates and zoom level of the map
//     map.setView(coords, zoomLevel);
  
//     // Create the tile layer and add it to the map
//     const lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       maxZoom: 18,
//     });
  
//     // Create the baseMaps object
//     const baseMaps = {
//       LightMap: lightMap,
//       // You can add additional base layers here
//     };
  
//     // Add the lightmap layer to the map by default
//     lightMap.addTo(map);
  
//     // Additional code for customizing the map and adding markers, overlays, etc.
  
//     // Return the map instance
//     return map;
//   }
  

//   // Create an overlayMaps object to hold the bikeStations layer.
//   function createMap(coords, zoomLevel) {
//     // Create a new map instance
//     const map = L.map('map');
  
//     // Set the center coordinates and zoom level of the map
//     map.setView(coords, zoomLevel);
  
//     // Create the tile layer and add it to the map
//     const lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       maxZoom: 18,
//     }).addTo(map);
  
//     // Create the overlayMaps object
//     const overlayMaps = {
//       BikeStations: L.layerGroup(),
//       // You can add additional overlay layers here
//     };
  
//     // Additional code for customizing the map and adding markers, overlays, etc.
//     // For example, you can add markers to the BikeStations layer:
//     const marker = L.marker([40.7, -74.0]).addTo(overlayMaps.BikeStations);
  
//     // Return the map instance
//     return map;
//   }
  

//   // Create the map object with options.

//   function createMap(coords, zoomLevel) {
//     // Create a new map instance with options
//     const map = L.map('map', {
//       center: coords,
//       zoom: zoomLevel,
//       // Additional options can be added here
//     });
  
//     // Additional code for customizing the map and adding layers, markers, etc.
  
//     // Return the map instance
//     return map;
//   }
  
//   // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
//   const newYorkCoords = [40.73, -74.0059];
//   const mapZoomLevel = 12;
  
//   const map = createMap(newYorkCoords, mapZoomLevel);
  
// // Create the createMarkers function.
// function createMarkers(map, markerData) {
//   const markers = [];

//   // Iterate over the markerData array
//   for (const data of markerData) {
//     // Extract the marker coordinates and any additional properties
//     const { coords, ...properties } = data;

//     // Create a marker with the coordinates and properties
//     const marker = L.marker(coords);

//     // Set additional properties, if any
//     for (const [key, value] of Object.entries(properties)) {
//       marker[key] = value;
//     }

//     // Add the marker to the map
//     marker.addTo(map);

//     // Push the marker to the markers array
//     markers.push(marker);
//   }

//   // Return the array of markers
//   return markers;
// }

//   // Pull the "stations" property from response.data.
//   const stations = response.data.stations;

//   // Initialize an array to hold the bike markers.
//   const bikeMarkers = [];

//   // Loop through the stations array.
//     // For each station, create a marker, and bind a popup with the station's name.
//     for (const station of stations) {
//       const { name, coords } = station;
//       const marker = L.marker(coords);
//       marker.bindPopup(name);
//       bikeMarkers.push(marker);
//     }    
    
//     // Add the marker to the bikeMarkers array.

//   // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
// // Create a layer group from the bike markers array
// const bikeMarkerLayer = L.layerGroup(bikeMarkers);

// // Pass the layer group to the createMap function
// createMap(newYorkCoords, mapZoomLevel, bikeMarkerLayer);


// function createMap(coords, zoomLevel, bikeMarkerLayer) {
//   // Create a new map instance
//   const map = L.map('map', {
//     center: coords,
//     zoom: zoomLevel,
//     // Additional options can be added here
//   });

//   // Add the bike marker layer to the map
//   bikeMarkerLayer.addTo(map);

//   // Additional code for customizing the map and adding other layers, markers, etc.

//   // Return the map instance
//   return map;
// }

// createMap(newYorkCoords, mapZoomLevel, bikeMarkerLayer);



// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.


// fetch('https://api.citibikenyc.com/v2/stations')
//   .then(response => response.json())
//   .then(data => {
//     const stations = data.stations;
//     createMarkers(map, stations);
//   })
//   .catch(error => {
//     console.error('Error fetching station information:', error);
//   });




// let url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'

// d3.json(url).then((response) => {
//   // console.log(response)
//   let newYorkCoords = [40.73, -74.0059];
//   let mapZoomLevel = 12;


//   let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   });

//   let baseMaps = {
//   "Street Map" : street
// }

//   let stations = response.data.stations
  
//   let bikeMarkers = []
//   // console.log(stations)

//   for (let i = 0; i < stations.length; i++) {
//     let station = stations[i]
//     let bikeCoords = [station.lat, station.lon]
//     let bikeMarker = L.marker(bikeCoords).bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>")
//     // console.log(bikeCoords)
//     bikeMarkers.push(bikeMarker)
//   }

//   let bicycleStations = L.layerGroup(bikeMarkers)
  
//   let overlayMaps = {
//     "Bicycle Stations" : bicycleStations
//  }
// //  console.log(bicycleStations)
 
//  let myMap = L.map("map-id", {
//    center: newYorkCoords,
//    zoom: mapZoomLevel,
//    layers: [street, bicycleStations]
//  })
 
//  L.control.layers(baseMaps, overlayMaps, {
//    collapsed: false
//  }).addTo(myMap)

// })







let url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;


// Create the createMap function.
function createMap (bicycleStations) {

  // Create the tile layer that will be the background of our map.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  // Create a baseMaps object to hold the lightmap layer.
  let baseMaps = {
    "Street Map" : street
  }
  

  // Create an overlayMaps object to hold the bikeStations layer.
  let overlayMaps = {
    "Bicycle Stations" : bicycleStations
 }

  // Create the map object with options.
  let myMap = L.map("map-id", {
    center: newYorkCoords,
    zoom: mapZoomLevel,
    layers: [street, bicycleStations]
  })

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap)
}

// Create the createMarkers function.
function createMarkers(response) {

  // Pull the "stations" property from response.data.
  let stations = response.data.stations

  // Initialize an array to hold the bike markers.
  let bikeMarkers = []
  // console.log(stations)

  // Loop through the stations array.
  for (let i = 0; i < stations.length; i++) {
    let station = stations[i]
    let bikeCoords = [station.lat, station.lon]

    // For each station, create a marker, and bind a popup with the station's name.
    let bikeMarker = L.marker(bikeCoords).bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>")
    
    // Add the marker to the bikeMarkers array.
    // console.log(bikeCoords)
    bikeMarkers.push(bikeMarker)
  }
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(bikeMarkers))
}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json(url).then(createMarkers);



