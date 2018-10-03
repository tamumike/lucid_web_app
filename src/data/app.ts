import MapImageLayer from "esri/layers/MapImageLayer";

import Search from "esri/widgets/Search";
import ScaleBar from "esri/widgets/ScaleBar";

import EsriMap from "esri/Map";

import * as popups from "./popups";


export const systemLayer = new MapImageLayer({
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

export const STR = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/STR/MapServer",
    id: "STR"
});

export const map = new EsriMap({
    basemap: "streets",
    layers: [STR, systemLayer]
});


// const searchSources = [{
//     featureLayer: new FeatureLayer({
//         url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Lines/FeatureServer/0",
//         outFields: ["*"]
//     }),
//     searchFields: ["LineName", "AFE"],
//     displayField: "LineName",
//     exactMatch: false,
//     outFields: ["*"],
//     name: "Lucid Lines",
//     placeholder: "Search Lines",
//     maxResults: 6,
//     maxSuggestions: 6,
//     suggestionsEnabled: true,
//     minSuggestCharacters: 0
//   }, {
//     featureLayer: new FeatureLayer({
//         url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Facilities/MapServer/1",
//         outFields: ["*"]
//     }),
//       searchFields: ["SiteName"],
//       displayField: "SiteName",
//       exactMatch: false,
//       outFields: ["*"],
//       name: "Lucid Facilities",
//       maxResults: 6,
//       maxSuggestions: 6,
//       suggestionsEnabled: true,
//       minSuggestCharacters: 0
//   }] as any;

// export var search = new Search({
//     allPlaceholder: "Search Lines or Facilities",
//     resultGraphicEnabled: true,
//     includeDefaultSources: false,
//     popupEnabled: true,
//     locationEnabled: false,
//     sources: searchSources
// });

export var scalebar = new ScaleBar({
    style: "ruler"
});
