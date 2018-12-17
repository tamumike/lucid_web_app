import $ = require('jquery');

import Widget from "./Widget";

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";
import EsriRequest from "esri/request";

import * as symbologyView from "../views/symbologyView";

export default class Symbology extends Widget {

     constructor() {
        super("Symbols", "symbology", true);
    }

    render() {
        
        symbologyView.renderWidget();
        
    }

    getMapLayers(map: EsriMap): string[] {

        const layerNames: string[] = [];

        map.layers.forEach((layer) => {

            if (symbologyView.excludeNames.indexOf(layer.id) === -1) layerNames.push(layer.id);
            
        });

        symbologyView.renderListItem(layerNames);

        return layerNames;

    }

    setRenderer(map: EsriMap, ID: string, info: any) {

        const layer = map.findLayerById(ID) as MapImageLayer;

        layer.sublayers.forEach((sublayer, i = 0) => {

            sublayer.set('renderer', info.newRenderer);

            (info.opacity <= 100 && info.opacity >= 0) ? sublayer.set('opacity', (info.opacity)) : sublayer.set('opacity', 1);

        });
        
    }

    getLayerInfo(map: EsriMap, ID: string): any {

        const layer = map.findLayerById(ID) as MapImageLayer;
        let layerProperties: any = {};

        layer.sublayers.forEach((sublayer, index = 0) => {

            layerProperties.definitionExpression = this.extractDefinitionQueryValues(sublayer.definitionExpression);

            layerProperties.valueField = this.extractValueField(sublayer.definitionExpression);

            layerProperties.opacity = layer.opacity;
            
            if (!sublayer.get('renderer')) {

                this.requestInfo(layer).then((response) => {
                    
                    layerProperties.geometry = response.data.geometryType;

                    layerProperties.renderer = this.convertRendererInfo(response.data.drawingInfo.renderer);

                    layerProperties.newRenderer = $.extend(true, {}, layerProperties.renderer);

                }).then(() => {

                    symbologyView.renderSymbologyPanel(ID, layerProperties);

                });
                
            } else {
                
                layerProperties.opacity = sublayer.opacity;

                layerProperties.renderer = this.convertRendererInfo(sublayer.get('renderer'));

                layerProperties.newRenderer = $.extend(true, {}, layerProperties.renderer);

                symbologyView.renderSymbologyPanel(ID, layerProperties);

            }

        });

        return layerProperties;

    }

    requestInfo(layer: MapImageLayer): IPromise<any> {

        let request = EsriRequest(`${layer.url}/0`, {
            query: {
                f: "json"
            },
            responseType: "json"
        });
        
        return request;

    }

    extractInfoFromProps(props: any): any {

        let extractedProps;

        if (props.drawingInfo) {

            extractedProps = {
                opacity: props.drawingInfo.transparency,
                renderer: props.drawingInfo.renderer,
                geometry: props.geometryType
            };
            
        } else {

            console.log('no request');

        }

        return extractedProps;

    }

    extractDefinitionQueryValues(expression: string): string[] | string {

        if (expression) {

            if (expression.startsWith('Dedication')) {
                return '';
            }

            else {
                return expression
                .slice(expression.indexOf('(') + 1, expression.indexOf(')'))
                .replace(/[()'']/g, '')
                .split(',');
            }
        } else {
            return expression;
        }
        
    }

    extractValueField(expression: string): string {

        if (expression) {

        return expression
            .slice(0, expression.indexOf(' '));

        } else {
            return expression;
        }

    }

    convertRendererInfo(info: any): any {

        let convertedInfo: any = {};

        if (info.type === 'uniqueValue' || info.type == 'unique-value') {

            convertedInfo.type = "unique-value";
            (info.field1) ? convertedInfo.field = info.field1 : convertedInfo.field = info.field;

            convertedInfo.uniqueValueInfos = info.uniqueValueInfos.map((valueInfo) => {
                
                let data: any = {
                    value: valueInfo.value,
                    symbol: {
                        type: this.getRendererType(valueInfo.symbol.type),
                        color: this.convertSymbolColor(valueInfo.symbol.color),
                    }
                }

                if (data.symbol.type === 'simple-fill') {

                    data.symbol.outline = {
                        color: this.convertSymbolColor(valueInfo.symbol.outline.color),
                        width: valueInfo.symbol.outline.width
                    }

                } else if (data.symbol.type === 'simple-line') {

                    data.symbol.width = valueInfo.symbol.width;

                } else if (data.symbol.type === 'simple-marker') {

                    data.symbol.outline = {
                        color: this.convertSymbolColor(valueInfo.symbol.outline.color),
                        width: valueInfo.symbol.outline.width
                    }
                    data.symbol.size = valueInfo.symbol.size;

                }

                return data;

            });

        } else if (info.type === 'simple') {

            convertedInfo.type = 'simple';
            convertedInfo.symbol = {
                type: this.getRendererType(info.symbol.type),
                color: this.convertSymbolColor(info.symbol.color)
            };

            if (convertedInfo.symbol.type === 'simple-marker') {

                convertedInfo.symbol.size = info.symbol.size;
                convertedInfo.symbol.outline = {
                    width: info.symbol.outline.width,
                    color: this.convertSymbolColor(info.symbol.outline.color)
                }

            } else if (convertedInfo.symbol.type === 'simple-line') {

                convertedInfo.symbol.width = info.symbol.width;

            }

        }

        return convertedInfo;

    }

    getRendererType(type: string): string {

        const oldValues = ['esriSMS', 'esriSFS', 'esriSLS'];
        const newValues = ['simple-marker', 'simple-fill', 'simple-line'];

        (oldValues.indexOf(type) !== -1) ? type = newValues[oldValues.indexOf(type)] : type = type;

        return type;

    }

    convertSymbolColor(color: any): number[] {

        if (Array.isArray(color)) {

            color = color;

        } else {

            color = [color.r, color.g, color.b]

        }
        
        return color;

    }

}