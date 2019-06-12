import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";

import Widget from "./Widget";
import * as blmView from "../views/blmView";

export default class BLM extends Widget {

    constructor() {

        super('BLM', 'blm', true);

    }

    render(): void {
        blmView.renderWidget();
    }

    listLayers(map: EsriMap): void {

        let visible: string[] = [];
        let notVisible: string[] = [];
        const layer = map.findLayerById('BLM') as MapImageLayer;
        
        layer.allSublayers.forEach((sublayer) => {
            if (sublayer.id != 0) {
                (sublayer.visible) ? visible.push(sublayer.title) : notVisible.push(sublayer.title);
            }
        });


        blmView.populateLayersList(visible, notVisible);
        
    }

    toggleVisibility (map: EsriMap, ID: string): void {
        
        const layer = map.findLayerById('BLM') as MapImageLayer;

        layer.allSublayers.forEach((sublayer) => {
            if (sublayer.title ==  ID) sublayer.visible = !sublayer.visible;
        });
        
    }

}