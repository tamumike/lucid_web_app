import $ = require('jquery');
//import esri = __esri;

import MapImageLayer from "esri/layers/MapImageLayer";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

import Widget from "./Widget";
import * as metersView from "../views/metersView";

import { elements } from '../views/base';

export default class Meters extends Widget {

    constructor() {

        super('Meters', 'meters', true);

    }

    render(): void {

        metersView.renderWidget();

    }

    isLayerVisible(layer: MapImageLayer): void {

         if (!layer.visible) {
            layer.visible = true;
         }

    }

    queryLayer(layer: MapImageLayer): any {

        const queryTask = new QueryTask({ url: `${layer.url}/0` });
        const query = new Query({ where: "Producer <> '$$$'", outFields: ["*"] });

        queryTask.execute(query).then((results) => {

            this.getFeatureValues(results.features);
            
        });

    }

    getFeatureValues(results: any): void {

        metersView.fields.forEach(field => {

            results.forEach(feature => {

                if (feature.attributes[field]) {

                    if (metersView.attributes[field].indexOf(feature.attributes[field]) === -1) metersView.attributes[field].push(feature.attributes[field]);

                }

            });

            metersView.attributes[field].sort();

        });
        
    }

    getSearchInput(element: JQuery): void {

        const input = element.val() as string;

        const field = $(elements.meters.fields_dropdown).val() as string;

        if (input && input !== '') {

            let subArray: string[];
          
              subArray = metersView.attributes[field].filter((value) => {
  
                return value.startsWith(input.toUpperCase());
  
              });

              metersView.scrollOptionsDiv(subArray[0]);
  
          }

    }

    applyFilter(values: string[], layer: MapImageLayer): void {

        let expression: string= ``;

        let field = $(elements.meters.fields_dropdown).val();

        if (values.length > 0) {

            expression = `${field} IN (`;            

            values.forEach((value: string, index: number) => {

                (index !== values.length - 1) ? expression += `'${value}',` : expression += `'${value}')`;

            });

        }

        layer.sublayers.forEach(sublayer => {

            sublayer.definitionExpression = expression;

        });

    }

    getCurrentExpression(layer: MapImageLayer): string[] {

        let values: string[] = [];

        layer.sublayers.forEach((sublayer, id) => {

            let expression: string = sublayer.definitionExpression;

            if (expression) {

                expression.slice(expression.indexOf('(') + 1, expression.indexOf(')'))
                    .replace(/[()'']/g, '')
                    .split(',').forEach((value) => {
                        values.push(value);
                    });
                
            }
            
        });

        return values;

    }

    addHeatMap(layer: MapImageLayer, map: EsriMap, view: MapView): void {

        if (!map.findLayerById('Heat Map')) {
        
            const heatmap = new MapImageLayer({
                url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Meters_Heat_Map/MapServer",
                title: "Heat Map",
                id: "Heat Map"
            });

            map.add(heatmap, 1);

        }

    }

}