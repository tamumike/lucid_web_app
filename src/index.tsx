import "./config";
import esri = __esri;

import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

var map = new EsriMap({
    basemap: 'streets'
});

var view = new MapView({
    map: map,
    container: "app",
    zoom: 9
});

view.when(() => {
    view.goTo({
        target: [-104.23, 32.41]
    });
});

console.log('yes');