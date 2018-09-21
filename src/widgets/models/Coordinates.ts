import $ = require("jquery");

import MapView from "esri/views/MapView";

import Widget from "./Widget";
import * as coordinatesView from "../views/coordinatesView";
import { elements } from '../views/base';

export default class Coordinates extends Widget {

    constructor() {
        super('Coordinates', 'coordinates', false);

        this.render();
    }

    render(): void {
        coordinatesView.renderWidget();
    }

    pointerMoveEvent(view: MapView): void {

        view.on('pointer-move', (e) => {

            e.stopPropagation();

            let point = view.toMap({x: e.x, y: e.y});

            if (!$(elements.coordinates.target_btn).hasClass('active')) {

                coordinatesView.setCoordinateValues(`${point.latitude.toFixed(4)}, ${point.longitude.toFixed(4)}`);

            }
            
        });

    }

    targetEvent(view: MapView): void {

        view.on('click', (evt) => {

            if ($(elements.coordinates.target_btn).hasClass('active')) {

                coordinatesView.setCoordinateValues(`${evt.mapPoint.latitude.toFixed(4)}, ${evt.mapPoint.longitude.toFixed(4)}`);

            }

        });

    }

    copyEvent(): void {

        const el = $('<textarea>').insertAfter('#app');

        el.text($(elements.coordinates.values).text());

        el.select();

        document.execCommand('copy');

        el.remove();

    }

}