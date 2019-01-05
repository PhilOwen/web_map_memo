"use strict";

window.onload = () => {
  let localGeoJSON = new ol.source.Vector({
        url: 'features.geojson',
        format: new ol.format.GeoJSON()
      }),
      redCircle = new ol.style.Circle({
        radius: 40,
        fill: new ol.style.Fill({color: 'rgba(255, 40, 40, 0.4)'}),
      });
  let vectorLayer = new ol.layer.Vector({
    source: localGeoJSON,
    style: (feature, resolution) => 
      new ol.style.Style({
        image: redCircle,
        text: new ol.style.Text({
          text: feature.get('name')
        })
      })
  });

  let stamenLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor'})
      });

  let map = new ol.Map({
    target: 'map',
    layers: [
      stamenLayer,
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([139.73, 35.68]),
      zoom: 13
    })
  });
};
