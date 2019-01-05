"use strict";

$(() => {
  let info = L.control();
  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };
  info.update = function (props) {
    this._div.innerHTML = props === undefined ? 'Click a city' 
      : '<h4>' + props.name + '</h4>' + 'Population: ' + props.population;
  };


  let pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html">国土地理院</a>'
    });

  let cities = L.layerGroup();
  $.getJSON('features.geojson', data => {
    let geojson = L.geoJson(data, {
      onEachFeature: (feature, layer) => {
        layer.on({
          click: () => info.update(feature.properties)
        });
      }
    });
    cities.addLayer(geojson);
  });

  let map = L.map('map', {
    center: [35, 145],
    zoom: 5,
    layers: [pale, cities]
  });

  map.addControl(info);
});
