define(["require", "exports", "tslib", "esri/layers/MapImageLayer", "esri/layers/FeatureLayer", "esri/widgets/Search", "esri/widgets/ScaleBar", "./popups"], function (require, exports, tslib_1, MapImageLayer_1, FeatureLayer_1, Search_1, ScaleBar_1, popups) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapImageLayer_1 = tslib_1.__importDefault(MapImageLayer_1);
    FeatureLayer_1 = tslib_1.__importDefault(FeatureLayer_1);
    Search_1 = tslib_1.__importDefault(Search_1);
    ScaleBar_1 = tslib_1.__importDefault(ScaleBar_1);
    popups = tslib_1.__importStar(popups);
    exports.systemLayer = new MapImageLayer_1.default({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_System/MapServer",
        id: "Lucid System",
        sublayers: [{
                id: 8,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 7,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 6,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 5,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 4,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 3,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 2,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 1,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.lines.title,
                    content: popups.system.lines.content
                },
                visible: true
            }, {
                id: 0,
                popupEnabled: true,
                popupTemplate: {
                    title: popups.system.sites.title,
                    content: popups.system.sites.content
                },
                visible: true
            }]
    });
    exports.STR = new MapImageLayer_1.default({
        url: "https://gisportal.lucid-energy.com/arcgis/rest/services/STR/MapServer",
        id: "STR"
    });
    var searchSources = [{
            featureLayer: new FeatureLayer_1.default({
                url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Lines/FeatureServer/0",
                outFields: ["*"]
            }),
            searchFields: ["LineName", "AFE"],
            displayField: "LineName",
            exactMatch: false,
            outFields: ["*"],
            name: "Lucid Lines",
            placeholder: "Search Lines",
            maxResults: 6,
            maxSuggestions: 6,
            suggestionsEnabled: true,
            minSuggestCharacters: 0
        }, {
            featureLayer: new FeatureLayer_1.default({
                url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Facilities/MapServer/1",
                outFields: ["*"]
            }),
            searchFields: ["SiteName"],
            displayField: "SiteName",
            exactMatch: false,
            outFields: ["*"],
            name: "Lucid Facilities",
            maxResults: 6,
            maxSuggestions: 6,
            suggestionsEnabled: true,
            minSuggestCharacters: 0
        }];
    exports.search = new Search_1.default({
        allPlaceholder: "Search Lines or Facilities",
        resultGraphicEnabled: true,
        includeDefaultSources: false,
        popupEnabled: true,
        locationEnabled: false,
        sources: searchSources
    });
    exports.scalebar = new ScaleBar_1.default({
        style: "ruler"
    });
});
//# sourceMappingURL=app.js.map