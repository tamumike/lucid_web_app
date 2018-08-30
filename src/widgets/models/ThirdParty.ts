import Widget from "./Widget";

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";

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
                id: featureClass
            });

            map.add(feature);
        }
        

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
        

     };

}