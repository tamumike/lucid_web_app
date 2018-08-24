import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";

import Widget from "./Widget";
import * as acreageView from "../views/acreageView";

export default class Acreage extends Widget {

    constructor() {
        super('Acreage', 'acreage');
    }

    render(): void {
        acreageView.renderWidget();
    }

    addFeature(map: EsriMap, producer: string, state: { acreage: string[], query: {} }): void {

        if (!this.isDuplicate(map, producer)) {

            const featureURL: string = `https://gisportal.lucid-energy.com/arcgis/rest/services/Acreage/${producer}/MapServer`;
            const feature: MapImageLayer = new MapImageLayer({url: featureURL, id: `${producer}`});
            map.add(feature);

            feature.when(() => {

                state.acreage.push(producer);
                
            });

        }

    }

    removeFeature(map: EsriMap, producer: string, state: { acreage: string[] }): void {

        const feature = map.findLayerById(producer);

        map.remove(feature);

        acreageView.removeListItem(producer);

        state.acreage = state.acreage.filter((item: string) => item !== producer);

    }

    isDuplicate(map: EsriMap, id: string): boolean {

       return (map.findLayerById(id)) ? true : false;

    }

    addCurrentLayersToList(state: { acreage: string[] }): void {

        state.acreage.forEach((layer) => {

            acreageView.renderListItem(layer);

        });

    }

    removeAllFeatures(map: EsriMap, state: any): void {

        state.acreage.forEach((producer: string) => {

            map.remove(map.findLayerById(producer));

            acreageView.removeListItem(producer);

        });

    }
    
    queryLayer(name: string, clause: string, state: { acreage_query: {}}, currentExpressions: string[]): void {
        
        const URL = `https://gisportal.lucid-energy.com/arcgis/rest/services/Acreage/${name}/MapServer/0`;
        const queryTask = new QueryTask({ url: URL });
        const query = new Query({ where: clause, outFields: ["*"] });

        queryTask.execute(query)
        .then(this.getQueryResults)
        .then(() => {
            
            if (currentExpressions.length > 0) acreageView.toggleActiveFilters(currentExpressions);

        });

    }

    getQueryResults(results: any): { features: {attributes: {Dedication: string}}[]} {

        let features = results.features;

        acreageView.populateFieldValues(features);

        return features;

    }

    applyFilter(filterParams : {map: EsriMap, name: string, definitionQuery: string}): void {

        const layer: MapImageLayer = filterParams.map.findLayerById(filterParams.name) as MapImageLayer;

        layer.sublayers.forEach((sublayer, i) => {
            
            sublayer.definitionExpression = filterParams.definitionQuery;
            
        });
         
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

        return expressionValues;

    }
}