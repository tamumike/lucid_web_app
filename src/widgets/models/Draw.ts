import Widget from "./Widget";
import Draw from "esri/views/2d/draw/Draw";
import MapView from "esri/views/MapView";

import * as drawView from "../views/drawView";

export default class Drawing extends Widget {

    constructor() {

        super('Draw', 'draw', true);

    }

    render(): void {
        drawView.renderWidget();
    }

    createDrawing(geometryType: string, view: MapView): void {

        var draw = new Draw({view: view});

        var action = draw.create(geometryType);

        

    }

}