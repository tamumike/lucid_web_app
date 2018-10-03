define(["require", "exports", "tslib", "esri/layers/MapImageLayer", "esri/tasks/QueryTask", "esri/tasks/support/Query", "./Widget", "../views/acreageView", "../../data/popups"], function (require, exports, tslib_1, MapImageLayer_1, QueryTask_1, Query_1, Widget_1, acreageView, popups) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapImageLayer_1 = tslib_1.__importDefault(MapImageLayer_1);
    QueryTask_1 = tslib_1.__importDefault(QueryTask_1);
    Query_1 = tslib_1.__importDefault(Query_1);
    Widget_1 = tslib_1.__importDefault(Widget_1);
    acreageView = tslib_1.__importStar(acreageView);
    popups = tslib_1.__importStar(popups);
    var Acreage = (function (_super) {
        tslib_1.__extends(Acreage, _super);
        function Acreage() {
            return _super.call(this, 'Acreage', 'acreage', true) || this;
        }
        Acreage.prototype.render = function () {
            acreageView.renderWidget();
        };
        Acreage.prototype.addFeature = function (map, producer, state) {
            if (!this.isDuplicate(map, producer)) {
                var definitionQuery = void 0;
                (producer === 'All') ? definitionQuery = '' : definitionQuery = "Producer IN('" + producer + "')";
                var featureURL = "https://gisportal.lucid-energy.com/arcgis/rest/services/Acreage/AllAcreage2/MapServer";
                var feature = new MapImageLayer_1.default({
                    url: featureURL,
                    id: "Acreage - " + producer,
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
                feature.when(function () {
                    state.acreage.push(producer);
                });
            }
        };
        Acreage.prototype.removeFeature = function (map, producer, state) {
            var feature = map.findLayerById("Acreage - " + producer);
            map.remove(feature);
            acreageView.removeListItem(producer);
            state.acreage = state.acreage.filter(function (item) { return item !== producer; });
        };
        Acreage.prototype.isDuplicate = function (map, id) {
            return (map.findLayerById(id)) ? true : false;
        };
        Acreage.prototype.addCurrentLayersToList = function (state) {
            state.acreage.forEach(function (layer) {
                acreageView.renderListItem(layer);
            });
        };
        Acreage.prototype.removeAllFeatures = function (map, state) {
            state.acreage.forEach(function (producer) {
                map.remove(map.findLayerById("Acreage - " + producer));
                acreageView.removeListItem(producer);
            });
        };
        Acreage.prototype.queryLayer = function (name, state, currentExpressions) {
            var clause;
            (name === 'All') ? clause = 'Shape.STArea() > 0' : clause = "Producer = '" + name + "'";
            var URL = "https://gisportal.lucid-energy.com/arcgis/rest/services/Acreage/AllAcreage/MapServer/0";
            var queryTask = new QueryTask_1.default({ url: URL });
            var query = new Query_1.default({ where: clause, outFields: ["*"] });
            queryTask.execute(query)
                .then(this.getQueryResults)
                .then(function () {
                if (currentExpressions.length > 0)
                    acreageView.toggleActiveFilters(currentExpressions);
            });
        };
        Acreage.prototype.getQueryResults = function (results) {
            var features = results.features;
            acreageView.populateFieldValues(features);
            return features;
        };
        Acreage.prototype.applyFilter = function (filterParams) {
            var _this = this;
            var layer = filterParams.map.findLayerById("Acreage - " + filterParams.name);
            layer.sublayers.forEach(function (sublayer, i) {
                (filterParams.name === 'All') ? sublayer.definitionExpression = filterParams.definitionQuery :
                    sublayer.definitionExpression = _this.replaceExistingClause(sublayer.definitionExpression, filterParams.definitionQuery);
            });
        };
        Acreage.prototype.replaceExistingClause = function (oldClause, newClause) {
            var newExpression = '';
            if (newClause) {
                if (oldClause.indexOf('AND') !== -1) {
                    newExpression = oldClause.slice(0, oldClause.indexOf('AND') - 1) + " AND " + newClause;
                }
                else {
                    newExpression = oldClause + " AND " + newClause;
                }
            }
            else {
                if (oldClause.indexOf('AND') !== -1) {
                    newExpression = oldClause.slice(0, oldClause.indexOf('AND') - 1);
                }
                else {
                    newExpression = oldClause;
                }
            }
            return newExpression;
        };
        Acreage.prototype.generateDefinitionQuery = function (field, options) {
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
        Acreage.prototype.getCurrentDefinitionQuery = function (map, name) {
            var expressionValues = [];
            var layer = map.findLayerById("Acreage - " + name);
            layer.sublayers.forEach(function (sublayer, id) {
                var expression = sublayer.definitionExpression;
                if (expression) {
                    if (expression.indexOf('Dedication IN (') !== -1) {
                        var clause = 'Dedication IN (';
                        var first = expression.indexOf(clause);
                        var clauseLength = clause.length;
                        expression.slice(first + clauseLength)
                            .replace(/[()'']/g, '')
                            .split(',').forEach(function (value) {
                            expressionValues.push(value);
                        });
                    }
                }
            });
            return expressionValues;
        };
        return Acreage;
    }(Widget_1.default));
    exports.default = Acreage;
});
//# sourceMappingURL=Acreage.js.map