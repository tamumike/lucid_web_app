define(["require", "exports", "tslib", "esri/config"], function (require, exports, tslib_1, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    config_1 = tslib_1.__importDefault(config_1);
    var DEFAULT_WORKER_URL = "https://js.arcgis.com/4.8/";
    var DEFAULT_LOADER_URL = DEFAULT_WORKER_URL + "dojo/dojo-lite.js";
    config_1.default.workers.loaderUrl = DEFAULT_LOADER_URL;
    config_1.default.workers.loaderConfig = {
        baseUrl: DEFAULT_WORKER_URL + "dojo",
        packages: [
            { name: "esri", location: DEFAULT_WORKER_URL + "esri" },
            { name: "dojo", location: DEFAULT_WORKER_URL + "dojo" },
            { name: "dojox", location: DEFAULT_WORKER_URL + "dojox" },
            { name: "dijit", location: DEFAULT_WORKER_URL + "dijit" },
            { name: "dstore", location: DEFAULT_WORKER_URL + "dstore" },
            { name: "moment", location: DEFAULT_WORKER_URL + "moment" },
            { name: "@dojo", location: DEFAULT_WORKER_URL + "@dojo" },
            {
                name: "cldrjs",
                location: DEFAULT_WORKER_URL + "cldrjs",
                main: "dist/cldr"
            },
            {
                name: "globalize",
                location: DEFAULT_WORKER_URL + "globalize",
                main: "dist/globalize"
            },
            {
                name: "maquette",
                location: DEFAULT_WORKER_URL + "maquette",
                main: "dist/maquette.umd"
            },
            {
                name: "maquette-css-transitions",
                location: DEFAULT_WORKER_URL + "maquette-css-transitions",
                main: "dist/maquette-css-transitions.umd"
            },
            {
                name: "maquette-jsx",
                location: DEFAULT_WORKER_URL + "maquette-jsx",
                main: "dist/maquette-jsx.umd"
            },
            { name: "tslib", location: DEFAULT_WORKER_URL + "tslib", main: "tslib" }
        ]
    };
});
//# sourceMappingURL=config.js.map