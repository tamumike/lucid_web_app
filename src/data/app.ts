import MapImageLayer from "esri/layers/MapImageLayer";

export const systemLayer = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_System_Com2/MapServer",
    id: "System"
});
