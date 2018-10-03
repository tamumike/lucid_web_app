define(["require", "exports", "tslib", "esri/layers/MapImageLayer", "esri/tasks/QueryTask", "esri/tasks/support/Query", "./Widget", "../views/drillingInfoView", "../../data/popups"], function (require, exports, tslib_1, MapImageLayer_1, QueryTask_1, Query_1, Widget_1, drillingInfoView, popups) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapImageLayer_1 = tslib_1.__importDefault(MapImageLayer_1);
    QueryTask_1 = tslib_1.__importDefault(QueryTask_1);
    Query_1 = tslib_1.__importDefault(Query_1);
    Widget_1 = tslib_1.__importDefault(Widget_1);
    drillingInfoView = tslib_1.__importStar(drillingInfoView);
    popups = tslib_1.__importStar(popups);
    var DrillingInfo = (function (_super) {
        tslib_1.__extends(DrillingInfo, _super);
        function DrillingInfo() {
            return _super.call(this, 'Drill_Info', 'drillInfo', true) || this;
        }
        DrillingInfo.prototype.render = function () {
            drillingInfoView.renderWidget();
        };
        DrillingInfo.prototype.addFeature = function (map, name, definitionQuery) {
            if (!this.isDuplicate(map, name)) {
                var featureURL = "https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/DI_" + name + "/MapServer";
                var feature_1 = new MapImageLayer_1.default({
                    url: featureURL,
                    id: "" + name,
                    sublayers: [{
                            id: 0,
                            popupEnabled: true,
                            popupTemplate: popups.drillingInfo[name]
                        }]
                });
                map.add(feature_1);
                if (definitionQuery) {
                    feature_1.when(function () {
                        feature_1.sublayers.forEach(function (sublayer, i) {
                            sublayer.definitionExpression = definitionQuery;
                        });
                    });
                }
            }
        };
        DrillingInfo.prototype.removeFeature = function (map, name) {
            var feature = map.findLayerById(name);
            map.remove(feature);
        };
        DrillingInfo.prototype.isDuplicate = function (map, id) {
            return (map.findLayerById(id)) ? true : false;
        };
        DrillingInfo.prototype.queryLayer = function (name, clause, state, currentExpressions) {
            var _this = this;
            var URL = "https://gisportal.lucid-energy.com/arcgis/rest/services/OPPL/DI_" + name + "/MapServer/0";
            var queryTask = new QueryTask_1.default({ url: URL });
            var query = new Query_1.default({ where: clause, outFields: ["*"] });
            queryTask.execute(query)
                .then(function (results) {
                _this.getValuesList(results.features, name, currentExpressions);
            }).then(function () {
                if (currentExpressions.length > 0)
                    drillingInfoView.toggleActiveFilters(currentExpressions);
            });
        };
        DrillingInfo.prototype.getValuesList = function (results, name, currentExpressions) {
            var field = drillingInfoView.templates[name].op_field;
            var values = [];
            results.forEach(function (feature) {
                if (values.indexOf(feature.attributes[field]) === -1)
                    values.push(feature.attributes[field]);
            });
            drillingInfoView.templates[name].values = values;
            drillingInfoView.renderValuesList(values.sort(), currentExpressions);
        };
        DrillingInfo.prototype.applyFilter = function (filterParams) {
            var layer = filterParams.map.findLayerById(filterParams.name);
            if (layer) {
                layer.sublayers.forEach(function (sublayer, i) {
                    sublayer.definitionExpression = filterParams.definitionQuery;
                });
            }
            else {
                this.addFeature(filterParams.map, filterParams.name, filterParams.definitionQuery);
            }
        };
        DrillingInfo.prototype.generateDefinitionQuery = function (field, options) {
            var definitionQuery = '';
            if (options.length > 0) {
                definitionQuery = field + " IN (";
                options.forEach(function (option, index) {
                    (index !== options.length - 1) ? definitionQuery += "'" + option + "'," : definitionQuery += "'" + option + "')";
                });
            }
            else
                definitionQuery = null;
            return definitionQuery;
        };
        DrillingInfo.prototype.getCurrentDefinitionQuery = function (map, name) {
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
        DrillingInfo.prototype.getSearchInput = function (element, feature) {
            var input = element.val();
            if (input && input !== '') {
                var subArray = void 0;
                subArray = drillingInfoView.templates[feature].values.filter(function (value) {
                    return value.startsWith(input.toUpperCase());
                });
                drillingInfoView.scrollOptionsDiv(subArray[0]);
            }
        };
        return DrillingInfo;
    }(Widget_1.default));
    exports.default = DrillingInfo;
});
//# sourceMappingURL=DrillingInfo.js.map