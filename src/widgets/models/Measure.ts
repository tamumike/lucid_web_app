import $ = require("jquery");

import MapView from "esri/views/MapView";
import Draw from "esri/views/draw/Draw";
import Polyline from "esri/geometry/Polyline";
import Polygon from "esri/geometry/Polygon";
import Graphic from "esri/Graphic";
import GeometryEngine from "esri/geometry/geometryEngine";

import Widget from "./Widget";
import * as measureView from "../views/measureView";
import { elements } from '../views/base';
import { TextSymbol } from 'esri/symbols';

export default class Measure extends Widget {

    constructor() {

        super('Measure', 'measure', true);

    }

    render(): void {
        measureView.renderWidget();
    }

    createDraw(view: MapView): Draw {

        return new Draw({view: view});

    }

    addMeasurement(draw: Draw, view: MapView, type: string, state:any): void {

        let unit = $(elements.measure.unit_select).val() as string;
        unit = unit.toLowerCase();

        let graphicType: string;

        (type === 'area') ? graphicType = 'polygon' : graphicType = 'polyline';        
        
        var action = draw.create(graphicType);
        
        action.on('vertex-add', (e) => drawGraphic(e));
        action.on('cursor-update', (e) => drawGraphic(e));
        action.on('vertex-remove', (e) => drawGraphic(e));
        action.on('draw-complete', (e) => {

            drawGraphic(e);

            $(elements.measure.go_btn).toggleClass('is_measuring');
            
        });

        state.drawAction = action;

        const drawGraphic = (event: any): void  => {

            let vertices = event.vertices;
            
            let shape: any;

            view.graphics.removeAll();
    
            // (graphicType === 'polygon') ? shape = createPolygon(vertices) : shape = createPolyline(vertices);
            if (graphicType === 'polygon') {
                vertices.length > 2 ? shape = createPolygon(vertices) : shape = createPolyline(vertices);
            } else {
                shape = createPolyline(vertices);
            }
    
            let graphic = createGraphic(shape);
    
            view.graphics.add(graphic);

            (graphicType === 'polygon') ? measureArea(shape) : measureLength(shape);
    
        }
    
        const createPolyline = (vertices: any): any => {
            return new Polyline({
                paths: vertices,
                spatialReference: view.spatialReference
            });
    
        };

        const createPolygon = (vertices: any): any => {
            return new Polygon({
                rings: vertices,
                spatialReference: view.spatialReference
            });
        };
    
        const createGraphic = (shape: any): any => {

            let symbol;

            const polygonSymbol = {
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

            const polylineSymbol = {
                geometry: shape,
                symbol: {
                    type: 'simple-line',
                    color: [40, 51, 101, 0.8],
                    width: 2.5,
                    style: "long-dash"
                }
            };

            (shape.type === 'polygon') ? symbol = polygonSymbol : symbol = polylineSymbol;
            
            let graphic = new Graphic(symbol);
    
            return graphic;
        };

        const measureArea = (polygon: Polygon) => {

            let area = GeometryEngine.geodesicArea(polygon, unit);

            var polygonText = new TextSymbol({
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                text: `${parseFloat(area.toFixed(2)).toLocaleString('en')} ${unit}`,
                xoffset: 3,
                yoffset: 3,
                font: {
                  size: 14,
                  family: "sans-serif"
                }
            });

            var graphic = new Graphic({
                geometry: polygon.centroid,
                symbol: polygonText
              });
              view.graphics.add(graphic);
            

        };

        const measureLength = (polyline: Polyline) => {

            let length = GeometryEngine.geodesicLength(polyline, unit);

            var lineText = new TextSymbol({
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                text: `${parseFloat(length.toFixed(2)).toLocaleString('en')} ${unit}`,
                xoffset: 0,
                yoffset: 30,
                font: {
                  size: 14,
                  family: "sans-serif",
                  weight: "bold"
                }
            });

            var graphic = new Graphic({
                geometry: polyline.extent.center,
                symbol: lineText
              });
              view.graphics.add(graphic);
            
        };

    }

}