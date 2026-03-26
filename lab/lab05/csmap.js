var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

/* Kyle field */
var circle = L.circle([30.610039, -96.340472], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);

/* OMB */
var ombicon = L.icon({
    iconUrl: 'omblogo.png',

    iconSize:     [50, 50],
    popupAnchor:  [0, 0],
});

L.marker([30.617832, -96.33662], {icon: ombicon}).addTo(map).bindPopup("This is the Eller O&M Building.");


/* Academic Building */
var academicicon = L.icon({
    iconUrl: 'academiclogo.png',

    iconSize:     [50, 50],
    popupAnchor:  [0, 0],
});

L.marker([30.615743, -96.340786], {icon: academicicon}).addTo(map).bindPopup("This is the Academic Building.");

/* On Click Coordinates Popup */
map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
