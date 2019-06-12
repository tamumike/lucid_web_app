import EsriMap from "esri/Map";

import Widget from "./Widget";
import * as layersView from "../views/layersView";

export default class Layers extends Widget {

    constructor() {

        super('Layers', 'layers', true);

    }

    render(): void {
        layersView.renderWidget();
    }

    listLayers(map: EsriMap): void {

        let visible: string[] = [];
        let notVisible: string[] = [];
        
        map.layers.forEach((layer) => {

            if (layersView.excludeLayers.indexOf(layer.id) === -1) {
            
                (layer.visible) ? visible.push(layer.id) : notVisible.push(layer.id);
            }
            
        });

        layersView.populateLayersList(visible, notVisible);
        
    }

    toggleVisibility (map: EsriMap, ID: string): void {
        
        const layer = map.findLayerById(ID);

        layer.visible = !layer.visible;
        
    }

}