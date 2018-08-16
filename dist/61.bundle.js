(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	// ../data/app = "./src/data/app.ts"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./src/data/app.ts":
/*!*************************!*\
  !*** ./src/data/app.ts ***!
  \*************************/
/*! exports provided: featureLayer, map, widgetList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"featureLayer\", function() { return featureLayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"widgetList\", function() { return widgetList; });\n/* harmony import */ var esri_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/Map */ \"./node_modules/arcgis-js-api/Map.js\");\n/* harmony import */ var esri_Map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(esri_Map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/layers/FeatureLayer */ \"./node_modules/arcgis-js-api/layers/FeatureLayer.js\");\n/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n// import AppViewModel from \"../widgets/App/AppViewModel\";\r\n\r\nconst featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_1___default.a({\r\n    url: \"https://gisportal.lucid-energy.com/arcgis/rest/services/Lucid_II_Lines/FeatureServer\"\r\n});\r\n\r\nconst map = new esri_Map__WEBPACK_IMPORTED_MODULE_0___default.a({\r\n    basemap: 'streets',\r\n    layers: [featureLayer]\r\n});\r\n\r\nconst widgetList = [];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hcHAudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcHAudHM/ZDIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXNyaU1hcCBmcm9tIFwiZXNyaS9NYXBcIjtcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XHJcblxyXG4vLyBpbXBvcnQgQXBwVmlld01vZGVsIGZyb20gXCIuLi93aWRnZXRzL0FwcC9BcHBWaWV3TW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIHVybDogXCJodHRwczovL2dpc3BvcnRhbC5sdWNpZC1lbmVyZ3kuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0x1Y2lkX0lJX0xpbmVzL0ZlYXR1cmVTZXJ2ZXJcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXAgPSBuZXcgRXNyaU1hcCh7XHJcbiAgICBiYXNlbWFwOiAnc3RyZWV0cycsXHJcbiAgICBsYXllcnM6IFtmZWF0dXJlTGF5ZXJdXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpZGdldExpc3QgPSBbXTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/app.ts\n");

/***/ })

}]);