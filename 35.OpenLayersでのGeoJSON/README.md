ShapeファイルをGeoJSONに変換したファイルを、OpenLayersから使ってみる。  
今回は日本の陸地をハイライトした。

Natural Earthというサイトから、パブリックドメインの地図をダウンロードできる。
世界の陸地がシェープファイルにまとめられている（わりと大容量）。  
拡張子shpのファイルをGDALという変換ツールに与えてGeoJSON形式にする。
GDALは、Macだと普通にbrewでインストールできる。

    ogr2ogr -f GeoJSON worldmap.geojson ne_10m_admin_0_countries.shp
で大きめなGeoJSONファイルができるので、
そこから日本の部分だけを手動コピペして、`japan.geojson`を作った。

色々な地図が、フリーで公開されているが、
公開形式がシェープファイルだと最初に意味がわからず躓く。
ただ、GDALとOpenLayersなどを組み合わせて使えば、
わりとすぐにブラウザで見れて、かつ自分のコンテンツとも組み合わせられる。

## Reference
- [Natural Earthの地図ダウンロードサイト](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/)
- [GDALダウンロードサイト](http://trac.osgeo.org/gdal/wiki/DownloadingGdalBinaries)
- [OpenLayersのスタイル](http://openlayers.org/en/v3.14.2/examples/polygon-styles.html)
- [GeoJSON仕様](http://geojson.org/geojson-spec.html)
