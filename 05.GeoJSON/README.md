GeoJSONオブジェクトを、ブラウザ向け地図ライブラリLeaflet.jsから使ってみる。

とりあえず、四ツ谷駅の位置や属性は既知として、
ピンを落とし、さらにピンをクリックしたときにポップアップするようにした。

## GeoJSON
GeoJSONは、データの一般的な表現形式であるJSONで
地理的なオブジェクトを表現するときの形式。
実用上十分な程度に特殊化していて、一般性（≒柔軟性、多数のオプション）が減っている。

雑に説明すると、
GeoJSONの中身は、属性を表す`properties`と位置を表す`geometry`に大別できる。  
`type`も持つが、これはただ単複を切り替えているだけ。
単数だと`type`属性に`Feature`、複数だと`FeatureCollection`を入れる。

`Feature`の場合、`geometry`には以下の単数の図形が入る。
+ Point: 点
+ LineString: ポリライン（折れ線）
+ Polygon: ポリゴン
+ MultiPoint: 点の集合
+ MultiLineString: ポリラインの集合
+ MultiPolygon: ポリゴンの集合
+ GeometryCollection: 上記図形の集合

`type`が`FeatureCollection`の場合、
その`features`属性に別のFeatureのJS配列が入れ子になって入る。

以下、Pointを持つGeoJSONオブジェクトの例。  

    {
      "type": "Feature",
      "properties": {
        "title": "Yotsuya Station"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [139.7302, 35.68645]
      }
    }    

## Reference
- [Leaflet公式サイト](http://leafletjs.com/examples/geojson.html)
- [GeoJSON公式仕様](http://geojson.org/geojson-spec.html)

が、日本語の資料はかなり少ない…
