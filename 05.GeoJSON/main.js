$(() => {
  let map = L.map('map').setView([35.68, 139.73], 15);
  let pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html">国土地理院</a>'
    });
  map.addLayer(pale);

  $.getJSON('features.geojson', data => {
    let geojson = L.geoJson(data, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(feature.properties.title);
      }
    });
    map.addLayer(geojson);
  });
});
