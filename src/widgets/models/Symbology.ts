import Widget from "./Widget";

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import SimpleRenderer from "esri/renderers/SimpleRenderer";
import EsriRequest from "esri/request";

import * as symbologyView from "../views/symbologyView";

export default class Symbology extends Widget {

     constructor() {
        super("Symbols", "symbology", true);
    }

    render() {
        
        symbologyView.renderWidget();
        
    }

    getMapLayers(map: EsriMap): string[] {

        const layerNames: string[] = [];

        map.layers.forEach((layer) => {

            if (symbologyView.excludeNames.indexOf(layer.id) === -1) layerNames.push(layer.id);
            
        });

        symbologyView.renderListItem(layerNames);

        return layerNames;

    }

    setRenderer(map: EsriMap, ID: string) {

        const layer = map.findLayerById(ID) as MapImageLayer;

        layer.sublayers.forEach((sublayer, i = 0) => {
            
            const symbol = new SimpleRenderer({
                symbol: {
                    type: "simple-fill",
                    color: [255, 0, 0, 0.5],
                    outline: {
                        width: 1,
                        color: "white"
                    }
                } 
            });

            sublayer.renderer = symbol;

        });

    }

    getLayerInfo(map: EsriMap, ID: string): void {
        
        const layer = map.findLayerById(ID) as MapImageLayer;
        let layerProperties: any = {};

        layer.sublayers.forEach((sublayer, i = 0) => {

            layerProperties.definitionExpression = this.extractDefinitionQueryValues(sublayer.definitionExpression);
            layerProperties.renderer = sublayer.renderer;
            layerProperties.labelingInfo = sublayer.labelingInfo;
            layerProperties.opacity = sublayer.opacity;
        
        });

        EsriRequest(`${layer.url}/0`, {
            query: {
                f: "json"
            },
            responseType: "json"
        }).then((response) => {
            
            layerProperties.geometry = response.data.geometryType;
            if (!layerProperties.labelingInfo) layerProperties.labelingInfo = response.data.labelingInfo;
            if (!layerProperties.opacity) layerProperties.opacity = response.data.drawingInfo.transparency;
            if (!layerProperties.renderer) layerProperties.renderer = response.data.drawingInfo.renderer;
            
        }).then(() => {
            symbologyView.renderSymbologyPanel(ID, layerProperties);
        });

    }

    extractDefinitionQueryValues(expression: string): string[] | string {

        if (expression) {
        return expression
            .slice(expression.indexOf('(') + 1, expression.indexOf(')'))
            .replace(/[()'']/g, '')
            .split(',');
        } else {
            return expression;
        }
        
    }

}