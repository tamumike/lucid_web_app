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

    addFeature(map: EsriMap, name: string, definitionQuery?: string): void {

        if (!this.isDuplicate(map, name)) {

            const featureURL: string = `https://gisportal.lucid-energy.com/arcgis/rest/services/DI_${name}_NM/MapServer`;
            const feature: MapImageLayer = new MapImageLayer({url: featureURL, id: `${name}`});

            map.add(feature);

            if (definitionQuery) {

                feature.when(() => {

                    feature.sublayers.forEach((sublayer, i) => {

                        sublayer.definitionExpression = definitionQuery;
    
                    });

                });


            }
        }

    }

    removeFeature(map: EsriMap, name: string): void {
        
        const feature = map.findLayerById(name);

        map.remove(feature);

    }

    isDuplicate(map: EsriMap, id: string): boolean {

        return (map.findLayerById(id)) ? true : false;

    }

    queryLayer(name: string, clause: string, state: { drillingInfo_query: {}}, currentExpressions: string[]): void {
        
        const URL = `https://gisportal.lucid-energy.com/arcgis/rest/services/DI_${name}_NM/MapServer/0`;
        const queryTask = new QueryTask({ url: URL });
        const query = new Query({ where: clause, outFields: ["*"] });

        queryTask.execute(query)
        .then((results) => {

            drillingInfoView.getValuesList(results.features, name);
            
        }).then(() => {
            
            if (currentExpressions.length > 0) drillingInfoView.toggleActiveFilters(currentExpressions);

        });
        
    }

    getQueryResults(results: any): { features: {}[]} {

        let features = results.features;

        return features;

    }

    applyFilter(filterParams: {name: string, definitionQuery: string, map: EsriMap}): void {

        const layer: MapImageLayer = filterParams.map.findLayerById(filterParams.name) as MapImageLayer;

        if (layer) {

            layer.sublayers.forEach((sublayer, i) => {

                sublayer.definitionExpression = filterParams.definitionQuery;
    
            });

        } else {

            this.addFeature(filterParams.map, filterParams.name, filterParams.definitionQuery);

        }

    }

    generateDefinitionQuery(field: string, options: string[]): string | null {

        let definitionQuery: string | null = '';

        if (options.length > 0) {

            definitionQuery = `${field} IN (`;            

            options.forEach((option: string, index: number) => {

                (index !== options.length - 1) ? definitionQuery += `'${option}',` : definitionQuery += `'${option}')`;

            });

        } else definitionQuery = null;

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

}