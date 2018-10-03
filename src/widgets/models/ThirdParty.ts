import Widget from "./Widget";

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import Query from "esri/tasks/support/Query";
import QueryTask from "esri/tasks/QueryTask";

import * as thirdPartyView from "../views/thirdPartyView";
import * as popups from "../../data/popups";

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
                    popupEnabled: true,
                    popupTemplate: {
                        title: popups.thirdParty.title,
                        content: popups.thirdParty.content
                    }
                }]
            });

            feature.visible = false;

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

     queryLayer(map: EsriMap, name: string, currentExpressions: string[]) {
    
        const url = `https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/${name.replace(' ', '_')}/MapServer/1`;        
        
        const queryTask = new QueryTask({
            url
        });

        const query = new Query();
        query.where = "MAP_LABEL <> '$$$'";
        query.outFields = ["*"];

        queryTask.execute(query).then((results) => {
            
            this.getValuesList(results.features, name, currentExpressions);
            
        });

     }

     getValuesList(results: any, name: string, currentExpressions: string[]): void {

        const values: string[] = [];

        results.forEach((feature) => {
            
            values.push(feature.attributes["MAP_LABEL"]);

        });

        thirdPartyView.templates.op_values[name] = values;
        thirdPartyView.renderValuesList(values.sort(), currentExpressions);
        
     }

     generateDefinitionQuery(options: string[]): string {

        let definitionQuery: string | null = '';

        if (options.length > 0) {

            definitionQuery = "MAP_LABEL IN (";

            options.forEach((option: string, index: number) => {

                (index !== options.length - 1) ? definitionQuery += `'${option}',` : definitionQuery += `'${option}')`;

            });

        }

        return definitionQuery;

     }

     getCurrentDefinitionQuery(map: EsriMap, name: string): string[] {

        const expressionValues: string[] = [];
        const layer: MapImageLayer = map.findLayerById(name) as MapImageLayer;

        if (layer) {

            layer.sublayers.forEach((sublayer, id) => {

                let expression: string = sublayer.definitionExpression;

                if (expression) {

                    expression.slice(expression.indexOf('(') + 1, expression.indexOf(')'))
                        .replace(/[()'']/g, '')
                        .split(',').forEach((value) => {
                            expressionValues.push(value);
                        });
                    
                }
                
            });

        }
        
        return expressionValues;

    }

    applyFilter(map: EsriMap, name: string, definitionQuery: string) {

        const layer = map.findLayerById(name) as MapImageLayer;
        
        layer.sublayers.forEach((sublayer, i = 0) => {

            sublayer.definitionExpression = definitionQuery;

        });

        (definitionQuery) ? layer.visible = true : layer.visible = false;

    }

    getSearchInput(element: JQuery, name: string): void {

        const input = element.val() as string;        

        if (input && input !== '') {

            let subArray: string[];

              subArray = thirdPartyView.templates.op_values[name].filter((value) => {
  
                return value.toLowerCase().startsWith(input.toLowerCase());
  
              });

              thirdPartyView.scrollOptionsDiv(subArray[0]);
  
          }

    }

}