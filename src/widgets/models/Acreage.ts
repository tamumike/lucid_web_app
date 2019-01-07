import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";

import Widget from "./Widget";
import * as acreageView from "../views/acreageView";
import * as popups from "../../data/popups";
import {URLs, fields} from "../views/base";

export default class Acreage extends Widget {

    constructor() {
        super('Acreage', 'acreage', true);
    }

    render(): void {
        acreageView.renderWidget();
    }

    addFeature(map: EsriMap, producer: string, state: { acreage: string[], query: {} }, definitionQuery: string, option?: string): void {

        

            let id: string;

            (option) ? id = `Acreage - ${producer} (${option})` : id = `Acreage - ${producer}`;

            if (!this.isDuplicate(map, id)) {

            const featureURL: string = `${URLs.acreage}`;
            const feature: MapImageLayer = new MapImageLayer({
                url: featureURL, 
                id: id,
                title: id,
                sublayers: [{
                    id: 0,
                    visible: true,
                    definitionExpression: definitionQuery,
                    popupEnabled: true,
                    popupTemplate: {
                        title: popups.acreage.title,
                        content: popups.acreage.content
                    }
                }]
            });
            map.add(feature, 0);

            feature.when(() => {

                state.acreage.push(id.slice(id.indexOf(producer)));
                
            });
        }

    }

    removeFeature(map: EsriMap, producer: string, state: { acreage: string[] }): void {

        const feature = map.findLayerById(`Acreage - ${producer}`);

        map.remove(feature);

        acreageView.removeListItem(producer);

        state.acreage = state.acreage.filter((item: string) => item !== producer);

    }

    isDuplicate(map: EsriMap, id: string): boolean {

       return (map.findLayerById(id)) ? true : false;

    }

    addCurrentLayersToList(state: { acreage: string[] }, map: EsriMap): void {   

        state.acreage.forEach((layer) => {

            acreageView.renderListItem(layer);

        });

    }

    removeAllFeatures(map: EsriMap, state: any): void {

        state.acreage.forEach((producer: string) => {

            map.remove(map.findLayerById(`Acreage - ${producer}`));

            acreageView.removeListItem(producer);

        });

    }
    
    queryLayer(name: string, state: { acreage_query: {}}, currentExpressions: string[]): void {
        
        let clause: string;

        (name === 'All') ? clause = 'Shape.STArea() > 0' : clause = `${fields.acreage.producer} = '${name}'`;

        const URL = `${URLs.acreage}\\0`;
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

        const layer: MapImageLayer = filterParams.map.findLayerById(`Acreage - ${filterParams.name}`) as MapImageLayer;

        layer.sublayers.forEach((sublayer, i) => {

            (filterParams.name === 'All') ? sublayer.definitionExpression = filterParams.definitionQuery :
            sublayer.definitionExpression = this.replaceExistingClause(sublayer.definitionExpression, filterParams.definitionQuery);
            
        });
         
    }

    replaceExistingClause(oldClause: string, newClause: string): string {

        let newExpression: string = '';

        if (newClause) {
            
            if (oldClause.indexOf('AND') !== -1) {

                newExpression = `${oldClause.slice(0, oldClause.indexOf('AND') - 1)} AND ${newClause}`;
                
            } else {

                newExpression = `${oldClause} AND ${newClause}`;
                
            }

        } else {

            if (oldClause.indexOf('AND') !== -1) {

                newExpression = oldClause.slice(0, oldClause.indexOf('AND') - 1);

            } else {

                newExpression = oldClause;

            }

        }

        return newExpression;
        
    }

    getCurrentDefinitionQuery(map: EsriMap, name: string): string[] {

        const expressionValues: string[] = [];
        const layer: MapImageLayer = map.findLayerById(`Acreage - ${name}`) as MapImageLayer;

        layer.sublayers.forEach((sublayer, id) => {

            let expression: string = sublayer.definitionExpression;

            if (expression) {

                if (expression.indexOf(`${fields.acreage.dedication} IN (`) !==  -1) {

                    let clause = `${fields.acreage.dedication} IN (`;
                    let first = expression.indexOf(clause);
                    let clauseLength = clause.length;

                    expression.slice(first + clauseLength)
                        .replace(/[()'']/g, '')
                        .split(',').forEach((value) => {
                            expressionValues.push(value);
                    });
                }
                
            }
            
        });

        return expressionValues;

    }

    generateDefinitionQuery(map: EsriMap, producer: string, field: string, option: string): string {

        let definitionQuery: string = '';

        if (producer !== 'All') {
            definitionQuery = `${fields.acreage.producer} IN ('${producer}') AND ${field} IN ('${option}')`;
        } else {
            definitionQuery = `${field} In ('${option}')`;
        }

        return definitionQuery;

    }
}