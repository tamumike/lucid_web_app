define(["require", "exports", "tslib", "jquery", "./Widget", "../views/coordinatesView", "../views/base"], function (require, exports, tslib_1, $, Widget_1, coordinatesView, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = tslib_1.__importDefault(Widget_1);
    coordinatesView = tslib_1.__importStar(coordinatesView);
    var Coordinates = (function (_super) {
        tslib_1.__extends(Coordinates, _super);
        function Coordinates() {
            var _this = _super.call(this, 'Coordinates', 'coordinates', false) || this;
            _this.render();
            return _this;
        }
        Coordinates.prototype.render = function () {
            coordinatesView.renderWidget();
        };
        Coordinates.prototype.pointerMoveEvent = function (view) {
            view.on('pointer-move', function (e) {
                e.stopPropagation();
                var point = view.toMap({ x: e.x, y: e.y });
                if (!$(base_1.elements.coordinates.target_btn).hasClass('active')) {
                    coordinatesView.setCoordinateValues(point.latitude.toFixed(4) + ", " + point.longitude.toFixed(4));
                }
            });
        };
        Coordinates.prototype.targetEvent = function (view) {
            view.on('click', function (evt) {
                if ($(base_1.elements.coordinates.target_btn).hasClass('active')) {
                    coordinatesView.setCoordinateValues(evt.mapPoint.latitude.toFixed(4) + ", " + evt.mapPoint.longitude.toFixed(4));
                }
            });
        };
        Coordinates.prototype.copyEvent = function () {
            var el = $('<textarea>').insertAfter('#app');
            el.text($(base_1.elements.coordinates.values).text());
            el.select();
            document.execCommand('copy');
            el.remove();
        };
        return Coordinates;
    }(Widget_1.default));
    exports.default = Coordinates;
});
//# sourceMappingURL=Coordinates.js.map