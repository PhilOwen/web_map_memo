"use strict";

window.onload = () => {
  let vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'japan.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'red',
        width: 3
      }),
      fill: new ol.style.Fill({
        color: 'rgba(200, 100, 100, 0.2)'
      })
    })
  });

  let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'toner'})
      }),
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([139.5, 35.0]),
      zoom: 8
    })
  });
};
