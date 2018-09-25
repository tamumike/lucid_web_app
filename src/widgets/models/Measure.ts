import $ = require("jquery");

import MapView from "esri/views/MapView";
import Draw from "esri/views/2d/draw/Draw";
import Polyline from "esri/geometry/Polyline";
import Graphic from "esri/Graphic";
import GeometryEngine from "esri/geometry/geometryEngine";

import Widget from "./Widget";
import * as measureView from "../views/measureView";
import { elements } from '../views/base';

export default class Measure extends Widget {

    constructor() {
        
        super('Measure', 'measure', true);

    }

    render(): void {
        measureView.renderWidget();
    }

    addLine(view: MapView): void {

        let pts: number[][] = [[-104.3264, 32.5408], [-104.1905, 32.5622], [-104.0305, 32.3908]];

        // create a new instance of draw
        var draw = new Draw({
            view: view
        });
        
        // create an instance of draw polyline action
        // the polyline vertices will be only added when
        // the pointer is clicked on the view
        var action = draw.create("polyline");
        
        // fires when a vertex is added
        action.on('vertex-add', (e) => drawLine(e));
        action.on('cursor-update', (e) => drawLine(e));
        action.on('vertex-remove', (e) => drawLine(e));
        action.on('draw-complete', (e) => drawLine(e));

        const drawLine = (event:any): void  => {

            let vertices = event.vertices;
    
            view.graphics.removeAll();
    
            let polyline = createPolyline(vertices);
    
            let graphic = createGraphic(polyline);
    
            view.graphics.add(graphic);

            let length = GeometryEngine.geodesicLength(polyline, "feet");            
    
        }
    
        const createPolyline = (vertices: any): any => {
    
            return new Polyline({
                paths: vertices,
                type: "polyline",
                spatialReference: view.spatialReference
            });
    
        }
    
        const createGraphic = (polyline: any): any => {
            let graphic = new Graphic({
                geometry: polyline,
                symbol: {
                    type:"simple-line",
                    color: [226, 119, 40],
                    width: 3
                }
            });
    
            return graphic;
        }

    }



}