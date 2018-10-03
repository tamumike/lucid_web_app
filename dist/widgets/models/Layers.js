define(["require", "exports", "tslib", "./Widget", "../views/layersView"], function (require, exports, tslib_1, Widget_1, layersView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Widget_1 = tslib_1.__importDefault(Widget_1);
    layersView = tslib_1.__importStar(layersView);
    var Layers = (function (_super) {
        tslib_1.__extends(Layers, _super);
        function Layers() {
            return _super.call(this, 'Layers', 'layers', true) || this;
        }
        Layers.prototype.render = function () {
            layersView.renderWidget();
        };
        Layers.prototype.listLayers = function (map) {
            var visible = [];
            var notVisible = [];
            map.layers.forEach(function (layer) {
                (layer.visible) ? visible.push(layer.id) : notVisible.push(layer.id);
            });
            layersView.populateLayersList(visible, notVisible);
        };
        Layers.prototype.toggleVisibility = function (map, ID) {
            var layer = map.findLayerById(ID);
            (layer.visible) ? layer.visible = false : layer.visible = true;
        };
        return Layers;
    }(Widget_1.default));
    exports.default = Layers;
});
//# sourceMappingURL=Layers.js.map