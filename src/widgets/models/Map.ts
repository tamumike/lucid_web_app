import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

import * as data from "../../data/app";

export default class ApplicationMap {

    map: EsriMap;
    view: MapView;
    center: number[];
    basemap: string;

    constructor() {
        this.map = new EsriMap({
            basemap: "streets",
            layers: [data.systemLayer]
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

        data.search.view = this.view;
        data.scalebar.view = this.view;

        this.view.ui.add(data.search, 'top-right');
        this.view.ui.add(data.scalebar, 'bottom-right');

        data.systemLayer.when(() => {
            
            this.view.goTo({ target: data.systemLayer.fullExtent });
            
        });
    }
}

