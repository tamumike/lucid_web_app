import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import BingMapsLayer from "esri/layers/BingMapsLayer";

import * as popups from "./popups";

export const systemLayer = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_System/MapServer",
    id: "Lucid System",
    sublayers: [{
        id: 9,
        popupEnabled: false,
        title: "Facitily Boundaries",
        visible: true
    }, {
        id: 8,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid SWD",
        visible: true
    }, {
        id: 7,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid LP",
        visible: true
    }, {
        id: 6,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress SWD",
        visible: true
    }, {
        id: 5,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress LP",
        visible: true
    }, {
        id: 4,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid NGL",
        visible: true
    }, {
        id: 3,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress NGL",
        legendEnabled: false,
        visible: false
    }, {
        id: 2,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid HP",
        visible: true
    }, {
        id: 1,
        popupEnabled: true,
        popupTemplate: {
            title: popups.system.lines.title,
            content: popups.system.lines.content
        },
        title: "Lucid In Progress HP",
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

export const surfaceOwnership = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/BLM_Surface_Ownership/MapServer",
    id: "Surface Ownership",
    visible: false
});

export const documentPoint = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Document_Point/MapServer",
    id: "Job Book Links",
    visible: false,
    sublayers: [{
        id: 0,
        popupEnabled: true,
        popupTemplate: {
            title: popups.documentPoint.title,
            content: popups.documentPoint.content
        }
    }],
});

export const mineralOwnership = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/BLM_Mineral_Ownership/MapServer",
    id: "Mineral Ownership",
    visible: false
});

export const STR = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/STR/MapServer",
    id: "STR",
    sublayers: [{
        id: 2,
        title: "SubSections",
        legendEnabled: false
    }, {
        id: 1,
        title: "Sections",
        legendEnabled: false
    }, {
        id: 0,
        title: "Township Range",
        legendEnabled: false
    }],
    legendEnabled: false,
    visible: false
});

export const meters = new MapImageLayer({
    id: "Meters",
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Meters/MapServer",
    sublayers: [{
        id: 0,
        popupEnabled: true,
        popupTemplate: {
            title: popups.meters.title,
            content: popups.meters.content
        },
        title: "Meters",
        visible: true
    }],
    visible: false
});

export const graphicsLayer = new GraphicsLayer({
    id: "Graphics"
});

export const blm = new MapImageLayer({
    id: "BLM",
    url: "https://gis.blm.gov/nmarcgis/rest/services/Wildlife/BLM_NM_Plant_Wildlife_Habitat/MapServer",
    sublayers: [{
        id: 3,
        title: 'Lesser Prairie Chicken Habitat',
        visible: true,
        popupEnabled: true,
        popupTemplate: {
            title: popups.blm[4].title,
            content: popups.blm[4].content
        }
        }, {
        id: 2,
        title: 'Dunes Sage Brush Lizard Habitat',
        visible: true,
        popupEnabled: true,
        popupTemplate: {
            title: popups.blm[3].title
        }
        }, {
        id: 1,
        title: 'Potential Habitat (Planning Area Only)',
        visible: true,
        popupEnabled: true,
        popupTemplate: {
            title: popups.blm[2].title,
            content: popups.blm[2].content
        }
        }],
    opacity: 0.6,
    visible : false
});

const bing = new BingMapsLayer({
    style: "aerial",
    key: "AiT8f_j8Li-0oBjCHKRCSgi7PLCAabrTUUf7fLvwBYf-y-RAhZzwUT0ugl6inLBj"
})

export const map = new EsriMap({
    basemap: {
        baseLayers: [bing]
    },
    layers: [surfaceOwnership, mineralOwnership, blm, STR, systemLayer, meters, graphicsLayer, documentPoint]
});
