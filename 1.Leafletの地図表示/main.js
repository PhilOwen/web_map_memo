"use strict"; 

window.onload = () => {
  let map = L.map('map').setView([35.7, 139.75], 15);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  let ichigayaPos = L.latLng(35.691, 139.735);
  let marker = L.marker(ichigayaPos)
      .bindPopup('市ヶ谷');
  marker.addTo(map)
    .openPopup();
  let circle = L.circle(ichigayaPos, 200);
  circle.addTo(map);
};