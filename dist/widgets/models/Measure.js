define(["require", "exports", "tslib", "jquery", "esri/views/2d/draw/Draw", "esri/geometry/Polyline", "esri/geometry/Polygon", "esri/Graphic", "esri/geometry/geometryEngine", "./Widget", "../views/measureView", "../views/base"], function (require, exports, tslib_1, $, Draw_1, Polyline_1, Polygon_1, Graphic_1, geometryEngine_1, Widget_1, measureView, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Draw_1 = tslib_1.__importDefault(Draw_1);
    Polyline_1 = tslib_1.__importDefault(Polyline_1);
    Polygon_1 = tslib_1.__importDefault(Polygon_1);
    Graphic_1 = tslib_1.__importDefault(Graphic_1);
    geometryEngine_1 = tslib_1.__importDefault(geometryEngine_1);
    Widget_1 = tslib_1.__importDefault(Widget_1);
    measureView = tslib_1.__importStar(measureView);
    var Measure = (function (_super) {
        tslib_1.__extends(Measure, _super);
        function Measure() {
            return _super.call(this, 'Measure', 'measure', true) || this;
        }
        Measure.prototype.render = function () {
            measureView.renderWidget();
        };
        Measure.prototype.addMeasurement = function (view, type) {
            view.graphics.removeAll();
            var unit = $(base_1.elements.measure.unit_select).val();
            unit = unit.toLowerCase();
            var draw = new Draw_1.default({
                view: view
            });
            var graphicType;
            (type === 'area') ? graphicType = 'polygon' : graphicType = 'polyline';
            var action = draw.create(graphicType);
            action.on('vertex-add', function (e) { return drawGraphic(e); });
            action.on('cursor-update', function (e) { return drawGraphic(e); });
            action.on('vertex-remove', function (e) { return drawGraphic(e); });
            action.on('draw-complete', function (e) {
                drawGraphic(e);
                $(base_1.elements.measure.go_btn).toggleClass('is_measuring');
            });
            var drawGraphic = function (event) {
                var vertices = event.vertices;
                var shape;
                view.graphics.removeAll();
                (graphicType === 'polygon') ? shape = createPolygon(vertices) : shape = createPolyline(vertices);
                var graphic = createGraphic(shape);
                view.graphics.add(graphic);
                (graphicType === 'polygon') ? measureArea(shape) : measureLength(shape);
            };
            var createPolyline = function (vertices) {
                return new Polyline_1.default({
                    paths: vertices,
                    spatialReference: view.spatialReference
                });
            };
            var createPolygon = function (vertices) {
                return new Polygon_1.default({
                    rings: vertices,
                    spatialReference: view.spatialReference
                });
            };
            var createGraphic = function (shape) {
                var symbol;
                var polygonSymbol = {
                    geometry: shape,
                    symbol: {
                        type: "simple-fill",
                        color: [40, 51, 101, 0.8],
                        style: "solid",
                        outline: {
                            color: [104, 96, 96],
                            width: 2
                        }
                    }
                };
                var polylineSymbol = {
                    geometry: shape,
                    symbol: {
                        type: 'simple-line',
                        color: [0, 174, 219],
                        width: 2.5,
                        style: "long-dash"
                    }
                };
                (shape.type === 'polygon') ? symbol = polygonSymbol : symbol = polylineSymbol;
                var graphic = new Graphic_1.default(symbol);
                return graphic;
            };
            var measureArea = function (polygon) {
                var area = geometryEngine_1.default.geodesicArea(polygon, unit);
                var graphic = new Graphic_1.default({
                    geometry: polygon.centroid,
                    symbol: {
                        type: "text",
                        color: "white",
                        haloColor: "black",
                        haloSize: "1px",
                        text: parseFloat(area.toFixed(2)).toLocaleString('en') + " " + unit,
                        xoffset: 3,
                        yoffset: 3,
                        font: {
                            size: 14,
                            family: "sans-serif"
                        }
                    }
                });
                view.graphics.add(graphic);
            };
            var measureLength = function (polyline) {
                var length = geometryEngine_1.default.geodesicLength(polyline, unit);
                var graphic = new Graphic_1.default({
                    geometry: polyline.extent.center,
                    symbol: {
                        type: "text",
                        color: [0, 0, 0],
                        haloColor: "black",
                        haloSize: "1px",
                        text: parseFloat(length.toFixed(2)).toLocaleString('en') + " " + unit,
                        xoffset: 0,
                        yoffset: 30,
                        font: {
                            size: 14,
                            family: "sans-serif",
                            weight: "bold"
                        }
                    }
                });
                view.graphics.add(graphic);
            };
        };
        return Measure;
    }(Widget_1.default));
    exports.default = Measure;
});
//# sourceMappingURL=Measure.js.map