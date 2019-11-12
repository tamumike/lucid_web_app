import $ = require('jquery');
//import esri = __esri;

import MapImageLayer from "esri/layers/MapImageLayer";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Polygon from "esri/geometry/Polygon";
import Polyline from "esri/geometry/Polyline";
import Draw from "esri/views/draw/Draw";
import Graphic from "esri/Graphic";
import Map from "esri/Map";

import Widget from "./Widget";
import * as metersView from "../views/metersView";

import { elements } from '../views/base';

export default class Meters extends Widget {
    selectMode: boolean = false;
    boundingBox: any;

    constructor() {

        super('Meters', 'meters', true);

    }

    render(): void {

        metersView.renderWidget();
        this.selectMode = false;
        this.boundingBox = null;
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

    toggleSelectMode() : boolean {
        this.selectMode = !this.selectMode;
        return this.selectMode;
    }

    drawBoundingBox(view: MapView) {
        view.graphics.removeAll();
        var draw = new Draw({view});
        var action = draw.create('polygon', {mode: "click"});
        
        action.on('vertex-add', (e) => this.drawGraphic(e, view));
        action.on('cursor-update', (e) => this.drawGraphic(e, view));
        action.on('vertex-remove', (e) => this.drawGraphic(e, view));
        action.on('draw-complete', (e) => this.boundingBox = this.drawGraphic(e, view));
    }

    drawGraphic(event: any, view: MapView) {

        view.graphics.removeAll();

        let shape: Polyline | Polygon;

        if (event.vertices.length > 2) {
            shape = new Polygon({
                rings: event.vertices,
                spatialReference: view.spatialReference
            });
        } else {
            shape = new Polyline({
                paths: event.vertices,
                spatialReference: view.spatialReference
            });
        }
        const graphic = this.createGraphic(shape);
        view.graphics.add(graphic);
        return graphic;
    }

    createGraphic(shape: any) {
        let symbol: any;

        if (shape.type === 'polygon') {
            symbol = {
                geometry: shape,
                symbol: {
                    type: "simple-fill",
                    color: [40, 51, 101, 0.8],
                    style: "solid",
                    outline: {
                        color: [104, 96, 96],
                        width: 2
                    }
                }
            };
        } else {
            symbol = {
                geometry: shape,
                symbol: {
                    type: 'simple-line',
                    color: [40, 51, 101, 0.8],
                    width: 2,
                    style: "solid"
                }
            }
        }

        return new Graphic(symbol);
        
    }

    spatialQuery(appMap: Map) {
        const queryTask = new QueryTask({url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Meters_Search/MapServer/0"});
        const query = new Query({geometry: this.boundingBox.geometry, outFields: ["*"]});

        queryTask.execute(query).then(results => this.exportQueryResults(results.features));
    }

    exportQueryResults(features: any) {
        let content = 'Meter #, Meter Name, Latitude, Longitude, Area, Lateral, Producer\n';
        features.forEach(x => {
            const attr = x.attributes;
            content += `${attr.Meter__},${attr.Meter_Name},${attr.Latitude},${attr.Longitude},${attr.Area},${attr.Lateral},${attr.Producer}\n`;
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', 'Meters_Export.csv');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

}