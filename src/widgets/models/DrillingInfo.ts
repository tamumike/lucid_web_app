import $ = require("jquery");

import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";

import Widget from "./Widget";
import * as drillingInfoView from "../views/drillingInfoView";

export default class DrillingInfo extends Widget {

    constructor() {
        super('Drill Info', 'drillInfo');
    }

    render(): void {
        drillingInfoView.renderWidget();
    }

    addFeature(map: EsriMap, name: string): void {

        if (!this.isDuplicate(map, name)) {

            const featureURL: string = `https://gisportal.lucid-energy.com/arcgis/rest/services/DI_${name}_NM/MapServer`;
            const feature: MapImageLayer = new MapImageLayer({url: featureURL, id: `${name}`});

            map.add(feature);
        }

    }

    isDuplicate(map: EsriMap, id: string): boolean {

        return (map.findLayerById(id)) ? true : false;

    }

    queryLayer(name: string, clause: string, state: { drillingInfo_query: {}}): void {
        
        const URL = `https://gisportal.lucid-energy.com/arcgis/rest/services/DI_${name}_NM/MapServer/0`;
        const queryTask = new QueryTask({ url: URL });
        const query = new Query({ where: clause, outFields: ["*"] });

        queryTask.execute(query)
        .then(this.getQueryResults);
        
    }

    getQueryResults(results: any): { features: {}[]} {

        let features = results.features;

        console.log(features);

        return features;

    }
}