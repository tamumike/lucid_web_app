import EsriMap from "esri/Map";

import Widget from "./Widget";
import * as metersView from "../views/metersView";

import { elements } from '../views/base';
import { meters } from '../../data/app';

export default class Meters extends Widget {

    constructor() {

        super('Meters', 'meters', true);

    }

    render(): void {

        metersView.renderWidget();

    }

    isLayerVisible(map: EsriMap): void {

        const layer = map.findLayerById('Meters');

         if (!layer.visible) {
            layer.visible = true;
         }

    }

}