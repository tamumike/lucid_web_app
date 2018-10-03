define(["require", "exports", "tslib", "esri/Map", "esri/views/MapView", "../../data/app", "@dojo/shim/Promise"], function (require, exports, tslib_1, Map_1, MapView_1, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = tslib_1.__importDefault(Map_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    data = tslib_1.__importStar(data);
    var ApplicationMap = (function () {
        function ApplicationMap() {
            this.map = new Map_1.default({
                basemap: "streets",
                layers: [data.systemLayer, data.STR]
            });
            this.map.reorder(data.STR, 0);
            this.view = new MapView_1.default({
                map: this.map,
                container: "app",
                center: [-104.071, 32.568],
                zoom: 10,
                ui: {
                    components: []
                }
            });
            data.search.view = this.view;
            data.scalebar.view = this.view;
            this.view.ui.add(data.search, 'top-right');
            this.view.ui.add(data.scalebar, 'bottom-right');
        }
        return ApplicationMap;
    }());
    exports.default = ApplicationMap;
});
//# sourceMappingURL=Map.js.map