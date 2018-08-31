import Widget from "./Widget";

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import Query from "esri/tasks/support/Query";
import QueryTask from "esri/tasks/QueryTask";

import * as thirdPartyView from "../views/thirdPartyView";

export default class ThirdParty extends Widget {

     constructor() {
        super("3rd_Party", "thirdParty", true);
    }

    render() {
        
        thirdPartyView.renderWidget();
        
    }

    addFeature(map: EsriMap, featureClass: string): void {

        if (!this.isDuplicate(map, featureClass)) {

            const featureURL: string = `https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/${featureClass.replace(' ','_')}/MapServer`;
            const feature: MapImageLayer = new MapImageLayer({
                url: featureURL,
                id: featureClass,
                sublayers: [{
                    id: 0,
                    definitionExpression: "MAP_LABEL IN ('Frontier', 'Maljamar', 'Empire Abo')"
                }]
            });

            map.add(feature);

            feature.when(() => {
                thirdPartyView.renderListItem(featureClass);
            });
        }
        

    }

    removeFeature(map: EsriMap, name: string): void {

        if (map.findLayerById(name)) map.remove(map.findLayerById(name));

        thirdPartyView.removeListItem(name);

    }

    isDuplicate(map: EsriMap, id: string): boolean {

        return (map.findLayerById(id)) ? true : false;
 
     }

    addCurrentLayersToList(map: EsriMap, feature: string): void {

        map.allLayers.forEach((layer) => {
            
            if (thirdPartyView.templates[feature].dropdown_opts.indexOf(layer.id) !== -1) {
                
                thirdPartyView.renderListItem(layer.id);
                
            }
            
        });
        

     }

     queryLayer(map: EsriMap, name: string) {
        
        const layer = map.findLayerById(name) as MapImageLayer;
        const url = `https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/${name.replace(' ', '_')}/MapServer/0`;
        
        const queryTask = new QueryTask({
            url
        });

        const query = new Query();
        query.where = "STATE IN('New Mexico')";
        query.outFields = ["*"];

        queryTask.execute(query).then((results) => {
            console.log(results);
            
        });

     }

}