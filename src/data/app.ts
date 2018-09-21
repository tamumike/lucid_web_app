import MapImageLayer from "esri/layers/MapImageLayer";
import FeatureLayer from "esri/layers/FeatureLayer";
import KMLLayer from "esri/layers/KMLLayer";

import Search from "esri/widgets/Search";
import ScaleBar from "esri/widgets/ScaleBar";

export const systemLayer = new MapImageLayer({
    url: "https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_System_Com2/MapServer",
    id: "System"
});

const searchSources = [{
    featureLayer: new FeatureLayer({
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
    featureLayer: new FeatureLayer({
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
  }] as any;

export var search = new Search({
    allPlaceholder: "Search Lines or Facilities",
    resultGraphicEnabled: true,
    includeDefaultSources: false,
    popupEnabled: true,
    locationEnabled: false,
    sources: searchSources
});

export var scalebar = new ScaleBar({
    style: "ruler"
});
