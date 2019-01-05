ブラウザ向け地図ライブラリOpenLayersを使ってみる。

GeoJSONファイルを読みに行き、その地点に丸を描き、文字を出した。
GeoJSONファイルには大手町駅の位置や属性が入れてあるので、それが表示される。

OpenLayersは、Leafletと同じく地図ライブラリだが、
Leafletよりは関数の命名則がより厳密で、やや長く複雑。
歴史もあり、バージョンによって内容がやや異なるらしい。  
歴史があるぶん、情報はLeafletより揃っている
（どちらにせよ英語だが）。

背景図には、Stamenという地図制作会社のものを使った。
この会社は少し変わった地図を作っている。
今回は水彩調のものを使っているが、コードの

    source: new ol.source.Stamen({layer: 'watercolor'})
の`layer`値を`toner`とか`toner-lite`とか`toner-labels`に
変えると、背景を色々と変えられる。

## Reference
- [OpenLayers 公式サイト](https://openlayers.org/en/latest/doc/quickstart.html)
- [Stamen 公式サイト](http://maps.stamen.com/)
- [GeoJSON公式仕様](http://geojson.org/geojson-spec.html)
