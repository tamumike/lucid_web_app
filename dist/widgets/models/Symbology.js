define(["require", "exports", "tslib", "jquery", "./Widget", "esri/request", "../views/symbologyView"], function (require, exports, tslib_1, $, Widget_1, request_1, symbologyView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = tslib_1.__importDefault(Widget_1);
    request_1 = tslib_1.__importDefault(request_1);
    symbologyView = tslib_1.__importStar(symbologyView);
    var Symbology = (function (_super) {
        tslib_1.__extends(Symbology, _super);
        function Symbology() {
            return _super.call(this, "Symbols", "symbology", true) || this;
        }
        Symbology.prototype.render = function () {
            symbologyView.renderWidget();
        };
        Symbology.prototype.getMapLayers = function (map) {
            var layerNames = [];
            map.layers.forEach(function (layer) {
                if (symbologyView.excludeNames.indexOf(layer.id) === -1)
                    layerNames.push(layer.id);
            });
            symbologyView.renderListItem(layerNames);
            return layerNames;
        };
        Symbology.prototype.setRenderer = function (map, ID, info) {
            var layer = map.findLayerById(ID);
            layer.sublayers.forEach(function (sublayer, i) {
                if (i === void 0) { i = 0; }
                sublayer.set('renderer', info.newRenderer);
                (info.opacity <= 100 && info.opacity >= 0) ? sublayer.set('opacity', (info.opacity)) : sublayer.set('opacity', 1);
            });
        };
        Symbology.prototype.getLayerInfo = function (map, ID) {
            var _this = this;
            var layer = map.findLayerById(ID);
            var layerProperties = {};
            layer.sublayers.forEach(function (sublayer, index) {
                if (index === void 0) { index = 0; }
                layerProperties.definitionExpression = _this.extractDefinitionQueryValues(sublayer.definitionExpression);
                layerProperties.valueField = _this.extractValueField(sublayer.definitionExpression);
                layerProperties.opacity = layer.opacity;
                if (!sublayer.get('renderer')) {
                    _this.requestInfo(layer).then(function (response) {
                        layerProperties.geometry = response.data.geometryType;
                        layerProperties.renderer = _this.convertRendererInfo(response.data.drawingInfo.renderer);
                        layerProperties.newRenderer = $.extend(true, {}, layerProperties.renderer);
                    }).then(function () {
                        symbologyView.renderSymbologyPanel(ID, layerProperties);
                    });
                }
                else {
                    layerProperties.opacity = sublayer.opacity;
                    layerProperties.renderer = _this.convertRendererInfo(sublayer.get('renderer'));
                    layerProperties.newRenderer = $.extend(true, {}, layerProperties.renderer);
                    symbologyView.renderSymbologyPanel(ID, layerProperties);
                }
            });
            return layerProperties;
        };
        Symbology.prototype.requestInfo = function (layer) {
            var request = request_1.default(layer.url + "/0", {
                query: {
                    f: "json"
                },
                responseType: "json"
            });
            return request;
        };
        Symbology.prototype.extractInfoFromProps = function (props) {
            var extractedProps;
            if (props.drawingInfo) {
                extractedProps = {
                    opacity: props.drawingInfo.transparency,
                    renderer: props.drawingInfo.renderer,
                    geometry: props.geometryType
                };
            }
            else {
                console.log('no request');
            }
            return extractedProps;
        };
        Symbology.prototype.extractDefinitionQueryValues = function (expression) {
            if (expression) {
                return expression
                    .slice(expression.indexOf('(') + 1, expression.indexOf(')'))
                    .replace(/[()'']/g, '')
                    .split(',');
            }
            else {
                return expression;
            }
        };
        Symbology.prototype.extractValueField = function (expression) {
            if (expression) {
                return expression
                    .slice(0, expression.indexOf(' '));
            }
            else {
                return expression;
            }
        };
        Symbology.prototype.convertRendererInfo = function (info) {
            var _this = this;
            var convertedInfo = {};
            if (info.type === 'uniqueValue' || info.type == 'unique-value') {
                convertedInfo.type = "unique-value";
                (info.field1) ? convertedInfo.field = info.field1 : convertedInfo.field = info.field;
                convertedInfo.uniqueValueInfos = info.uniqueValueInfos.map(function (valueInfo) {
                    var data = {
                        value: valueInfo.value,
                        symbol: {
                            type: _this.getRendererType(valueInfo.symbol.type),
                            color: _this.convertSymbolColor(valueInfo.symbol.color),
                        }
                    };
                    if (data.symbol.type === 'simple-fill') {
                        data.symbol.outline = {
                            color: _this.convertSymbolColor(valueInfo.symbol.outline.color),
                            width: valueInfo.symbol.outline.width
                        };
                    }
                    else if (data.symbol.type === 'simple-line') {
                        data.symbol.width = valueInfo.symbol.width;
                    }
                    else if (data.symbol.type === 'simple-marker') {
                        data.symbol.outline = {
                            color: _this.convertSymbolColor(valueInfo.symbol.outline.color),
                            width: valueInfo.symbol.outline.width
                        };
                        data.symbol.size = valueInfo.symbol.size;
                    }
                    return data;
                });
            }
            else if (info.type === 'simple') {
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
                    };
                }
                else if (convertedInfo.symbol.type === 'simple-line') {
                    convertedInfo.symbol.width = info.symbol.width;
                }
            }
            return convertedInfo;
        };
        Symbology.prototype.getRendererType = function (type) {
            var oldValues = ['esriSMS', 'esriSFS', 'esriSLS'];
            var newValues = ['simple-marker', 'simple-fill', 'simple-line'];
            (oldValues.indexOf(type) !== -1) ? type = newValues[oldValues.indexOf(type)] : type = type;
            return type;
        };
        Symbology.prototype.convertSymbolColor = function (color) {
            if (Array.isArray(color)) {
                color = color;
            }
            else {
                color = [color.r, color.g, color.b];
            }
            return color;
        };
        return Symbology;
    }(Widget_1.default));
    exports.default = Symbology;
});
//# sourceMappingURL=Symbology.js.map