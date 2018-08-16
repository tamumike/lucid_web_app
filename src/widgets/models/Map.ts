import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

export default class ApplicationMap {

    map: EsriMap;
    view: MapView;
    center: number[];
    basemap: string;

    constructor() {
        this.map = new EsriMap({
            basemap: "streets"
        });
        this.view = new MapView({
            map: this.map,
            container: "app",
            center: [-104.24, 32.41],
            zoom: 9,
            ui: {
                components: []
            }
        });
    }
}