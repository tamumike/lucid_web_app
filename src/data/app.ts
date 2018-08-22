import EsriMap from "esri/Map";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapImageLayer from "esri/layers/MapImageLayer";

// import AppViewModel from "../widgets/App/AppViewModel";

export const featureLayer = new FeatureLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Lines/FeatureServer"
});

export const map = new EsriMap({
    basemap: 'streets'
});
