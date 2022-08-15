import axios from "axios";
import * as L from 'leaflet';

const $ = (selector) => {
  return document.querySelector(selector);
}

var map = L.map('map').setView([ 51.505, -0.09 ], 17);
const customIcon = L.icon({
  iconUrl: new URL('/images/icon-location.svg', import.meta.url),
  iconSize: [ 46, 56 ], // size of the icon  
  iconAnchor: [ 23, 56 ], // point of the icon which will correspond to marker's location  
});

let marker = L.marker([ 51.505, -0.09 ], { icon: customIcon });
marker.addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const fetchData = async (ip) => {

  const URL = ip ? `/api?IP=${ip}` : '/api';
  const response = await axios.get(URL);
  return response.data;
}

fetchData().then((data) => {

  $('.query-ip').textContent = data.ip;
  $('.query-location').textContent = data.location;
  $('.query-timezone').textContent = data.timezone;
  $('.query-isp').textContent = data.isp;
  map.setView([ data.lat, data.lng ]);
  map.removeLayer(marker);
  marker = L.marker([ data.lat, data.lng ], { icon: customIcon });
  marker.addTo(map);
})