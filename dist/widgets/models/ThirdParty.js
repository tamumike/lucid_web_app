define(["require", "exports", "tslib", "./Widget", "esri/layers/MapImageLayer", "esri/tasks/support/Query", "esri/tasks/QueryTask", "../views/thirdPartyView", "../../data/popups"], function (require, exports, tslib_1, Widget_1, MapImageLayer_1, Query_1, QueryTask_1, thirdPartyView, popups) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = tslib_1.__importDefault(Widget_1);
    MapImageLayer_1 = tslib_1.__importDefault(MapImageLayer_1);
    Query_1 = tslib_1.__importDefault(Query_1);
    QueryTask_1 = tslib_1.__importDefault(QueryTask_1);
    thirdPartyView = tslib_1.__importStar(thirdPartyView);
    popups = tslib_1.__importStar(popups);
    var ThirdParty = (function (_super) {
        tslib_1.__extends(ThirdParty, _super);
        function ThirdParty() {
            return _super.call(this, "3rd_Party", "thirdParty", true) || this;
        }
        ThirdParty.prototype.render = function () {
            thirdPartyView.renderWidget();
        };
        ThirdParty.prototype.addFeature = function (map, featureClass) {
            if (!this.isDuplicate(map, featureClass)) {
                var featureURL = "https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/" + featureClass.replace(' ', '_') + "/MapServer";
                var feature = new MapImageLayer_1.default({
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
                feature.when(function () {
                    thirdPartyView.renderListItem(featureClass);
                });
            }
        };
        ThirdParty.prototype.removeFeature = function (map, name) {
            if (map.findLayerById(name))
                map.remove(map.findLayerById(name));
            thirdPartyView.removeListItem(name);
        };
        ThirdParty.prototype.isDuplicate = function (map, id) {
            return (map.findLayerById(id)) ? true : false;
        };
        ThirdParty.prototype.addCurrentLayersToList = function (map, feature) {
            map.allLayers.forEach(function (layer) {
                if (thirdPartyView.templates[feature].dropdown_opts.indexOf(layer.id) !== -1) {
                    thirdPartyView.renderListItem(layer.id);
                }
            });
        };
        ThirdParty.prototype.queryLayer = function (map, name, currentExpressions) {
            var _this = this;
            var url = "https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/" + name.replace(' ', '_') + "/MapServer/1";
            var queryTask = new QueryTask_1.default({
                url: url
            });
            var query = new Query_1.default();
            query.where = "MAP_LABEL <> '$$$'";
            query.outFields = ["*"];
            queryTask.execute(query).then(function (results) {
                _this.getValuesList(results.features, name, currentExpressions);
            });
        };
        ThirdParty.prototype.getValuesList = function (results, name, currentExpressions) {
            var values = [];
            results.forEach(function (feature) {
                values.push(feature.attributes["MAP_LABEL"]);
            });
            thirdPartyView.templates.op_values[name] = values;
            thirdPartyView.renderValuesList(values.sort(), currentExpressions);
        };
        ThirdParty.prototype.generateDefinitionQuery = function (options) {
            var definitionQuery = '';
            if (options.length > 0) {
                definitionQuery = "MAP_LABEL IN (";
                options.forEach(function (option, index) {
                    (index !== options.length - 1) ? definitionQuery += "'" + option + "'," : definitionQuery += "'" + option + "')";
                });
            }
            return definitionQuery;
        };
        ThirdParty.prototype.getCurrentDefinitionQuery = function (map, name) {
            var expressionValues = [];
            var layer = map.findLayerById(name);
            if (layer) {
                layer.sublayers.forEach(function (sublayer, id) {
                    var expression = sublayer.definitionExpression;
                    if (expression) {
                        expression.slice(expression.indexOf('(') + 1, expression.indexOf(')'))
                            .replace(/[()'']/g, '')
                            .split(',').forEach(function (value) {
                            expressionValues.push(value);
                        });
                    }
                });
            }
            return expressionValues;
        };
        ThirdParty.prototype.applyFilter = function (map, name, definitionQuery) {
            var layer = map.findLayerById(name);
            layer.sublayers.forEach(function (sublayer, i) {
                if (i === void 0) { i = 0; }
                sublayer.definitionExpression = definitionQuery;
            });
            (definitionQuery) ? layer.visible = true : layer.visible = false;
        };
        ThirdParty.prototype.getSearchInput = function (element, name) {
            var input = element.val();
            if (input && input !== '') {
                var subArray = void 0;
                subArray = thirdPartyView.templates.op_values[name].filter(function (value) {
                    return value.toLowerCase().startsWith(input.toLowerCase());
                });
                thirdPartyView.scrollOptionsDiv(subArray[0]);
            }
        };
        return ThirdParty;
    }(Widget_1.default));
    exports.default = ThirdParty;
});
//# sourceMappingURL=ThirdParty.js.map