"use strict";

$(() => {
  let opts = {
      attribution: '&copy; <a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html">国土地理院</a>'
    },
    pale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', opts),
    std  = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',  opts);
  let osm  =  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

  let map = L.map('map', {
    center: [35, 145],
    zoom: 5,
    layers: [pale]
  });
  let control = L.control.layers({
    '国土地理院 淡色': pale,
    '国土地理院 標準': std,
    'OSM':           osm
  });

  map.addControl(control);
});
