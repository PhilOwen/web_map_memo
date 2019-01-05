Leafletの地図上で、情報を出すコントロールを付けてみる。

今回は安直に、都市のピンをクリックすると、
その都市名と人口が右上の情報領域に出るようにした。  
L.controlクラスを使えばよかった。

なお、都市の情報は、
GeoJSONファイルとしてサーバに置いた。
ブラウザはそれを取ってきて、ピンを描いている。

## Reference
[Leaflet公式チュートリアル](http://leafletjs.com/examples.html)をかなり参考にした。
- Interactive Choropleth Map
