ブラウザで地図を使うライブラリであるLeaflet.jsを入門的に使ってみる。  
市ヶ谷駅にマーカを落とし、円も書いてみる。

Leaflet.jsは、Google Mapsほかウェブ地図や自前の地図が使えて、切り替えられる。
ただし、Google Mapsは最近規定が変わり、使うまでの手間が多少増えた。
ここでは簡単なOpenStreetMapを使う
（なお、OSMのサーバは強くないため、直リンクは本当はよくない）。

LeafletのライブラリはCDNのものを使っているので、
NPMでのインストールだとかは全く不要。
`python3 -m http.server`とかでHTTPサーバを起動すれば、
localhost:8000ですぐ見れる。

[Leaflet公式サイト](http://leafletjs.com/examples.html)は
結構充実している。
色々試せそう。