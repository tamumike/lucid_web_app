import $ = require('jquery');

import MapImageLayer from "esri/layers/MapImageLayer";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";
// import HeatMapRenderer from "esri/renderers/HeatmapRenderer";

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

    heatMapTest(layer: MapImageLayer): void {

        const renderer = {
            type: "heatmap",
            colorStops: [
            {
              color: "rgba(63, 40, 102, 0)",
              ratio: 0
            },
            {
              color: "#472b77",
              ratio: 0.083
            },
            {
              color: "#4e2d87",
              ratio: 0.166
            },
            {
              color: "#563098",
              ratio: 0.249
            },
            {
              color: "#5d32a8",
              ratio: 0.332
            },
            {
              color: "#6735be",
              ratio: 0.415
            },
            {
              color: "#7139d4",
              ratio: 0.498
            },
            {
              color: "#7b3ce9",
              ratio: 0.581
            },
            {
              color: "#853fff",
              ratio: 0.664
            },
            {
              color: "#a46fbf",
              ratio: 0.747
            },
            {
              color: "#c29f80",
              ratio: 0.830
            },
            {
              color: "#e0cf40",
              ratio: 0.913
            },
            {
              color: "#ffff00",
              ratio: 1
            }],
            maxPixelIntensity: 25,
            minPixelIntensity: 0
          };

          layer.sublayers.forEach(sublayer => {

            sublayer.renderer = renderer;

          });
    }

}