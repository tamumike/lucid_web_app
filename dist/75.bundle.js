(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/views/3d/layers/ImageryLayerView3D':"./node_modules/arcgis-js-api/views/3d/layers/ImageryLayerView3D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/arcgis-js-api/views/3d/layers/ImageryLayerView3D.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/ImageryLayerView3D.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/watchUtils */ \"./node_modules/arcgis-js-api/core/watchUtils.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ./DynamicLayerView3D */ \"./node_modules/arcgis-js-api/views/3d/layers/DynamicLayerView3D.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,a,i,r,n,s){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([r.whenOnce(this.view.basemapTerrain,\"ready\",function(){return e.initializeMaximumDataResolution()}),this.handles.add(this.layer.watch(\"exportImageServiceParameters.version\",function(t){e.doRefresh()}))])},t.prototype.initializeMaximumDataResolution=function(){var e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})},t.prototype.processResult=function(e,t){e.image=document.createElement(\"canvas\"),e.pixelData=t.pixelData;var a=e.image,i=a.getContext(\"2d\"),r=this.layer.applyFilter(e.pixelData),n=r.pixelBlock;a.width=n.width,a.height=n.height;var s=i.createImageData(n.width,n.height),o=n.getAsRGBA();s.data.set(o),i.putImageData(s,0,0)},t.prototype.updateImage=function(e){if(e&&e.pixelData){var t=e.image,a=t.getContext(\"2d\"),i=this.layer.applyFilter(e.pixelData),r=i.pixelBlock,n=a.createImageData(r.width,r.height),s=r.getAsRGBA();return t.width=r.width,t.height=r.height,n.data.set(s),a.putImageData(n,0,0),!0}return!1},i([n.property()],t.prototype,\"layer\",void 0),t=i([n.subclass(\"esri.views.3d.layers.ImageryLayerView3D\")],t)}(n.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvSW1hZ2VyeUxheWVyVmlldzNELmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvM2QvbGF5ZXJzL0ltYWdlcnlMYXllclZpZXczRC5qcz9iN2JjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9leHRlbmRzSGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNvcmF0ZUhlbHBlclwiLFwiLi4vLi4vLi4vY29yZS93YXRjaFV0aWxzXCIsXCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzXCIsXCIuL0R5bmFtaWNMYXllclZpZXczRFwiXSxmdW5jdGlvbihlLHQsYSxpLHIsbixzKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBudWxsIT09ZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9cmV0dXJuIGEodCxlKSx0LnByb3RvdHlwZS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmhhbmRsZXMuYWRkKFtyLndoZW5PbmNlKHRoaXMudmlldy5iYXNlbWFwVGVycmFpbixcInJlYWR5XCIsZnVuY3Rpb24oKXtyZXR1cm4gZS5pbml0aWFsaXplTWF4aW11bURhdGFSZXNvbHV0aW9uKCl9KSx0aGlzLmhhbmRsZXMuYWRkKHRoaXMubGF5ZXIud2F0Y2goXCJleHBvcnRJbWFnZVNlcnZpY2VQYXJhbWV0ZXJzLnZlcnNpb25cIixmdW5jdGlvbih0KXtlLmRvUmVmcmVzaCgpfSkpXSl9LHQucHJvdG90eXBlLmluaXRpYWxpemVNYXhpbXVtRGF0YVJlc29sdXRpb249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnZpZXcuYmFzZW1hcFRlcnJhaW4uc3BhdGlhbFJlZmVyZW5jZSx0PXRoaXMubGF5ZXIuZnVsbEV4dGVudDt0JiZlLmVxdWFscyh0LnNwYXRpYWxSZWZlcmVuY2UpJiYodGhpcy5tYXhpbXVtRGF0YVJlc29sdXRpb249e3g6dGhpcy5sYXllci5waXhlbFNpemVYLHk6dGhpcy5sYXllci5waXhlbFNpemVZfSl9LHQucHJvdG90eXBlLnByb2Nlc3NSZXN1bHQ9ZnVuY3Rpb24oZSx0KXtlLmltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksZS5waXhlbERhdGE9dC5waXhlbERhdGE7dmFyIGE9ZS5pbWFnZSxpPWEuZ2V0Q29udGV4dChcIjJkXCIpLHI9dGhpcy5sYXllci5hcHBseUZpbHRlcihlLnBpeGVsRGF0YSksbj1yLnBpeGVsQmxvY2s7YS53aWR0aD1uLndpZHRoLGEuaGVpZ2h0PW4uaGVpZ2h0O3ZhciBzPWkuY3JlYXRlSW1hZ2VEYXRhKG4ud2lkdGgsbi5oZWlnaHQpLG89bi5nZXRBc1JHQkEoKTtzLmRhdGEuc2V0KG8pLGkucHV0SW1hZ2VEYXRhKHMsMCwwKX0sdC5wcm90b3R5cGUudXBkYXRlSW1hZ2U9ZnVuY3Rpb24oZSl7aWYoZSYmZS5waXhlbERhdGEpe3ZhciB0PWUuaW1hZ2UsYT10LmdldENvbnRleHQoXCIyZFwiKSxpPXRoaXMubGF5ZXIuYXBwbHlGaWx0ZXIoZS5waXhlbERhdGEpLHI9aS5waXhlbEJsb2NrLG49YS5jcmVhdGVJbWFnZURhdGEoci53aWR0aCxyLmhlaWdodCkscz1yLmdldEFzUkdCQSgpO3JldHVybiB0LndpZHRoPXIud2lkdGgsdC5oZWlnaHQ9ci5oZWlnaHQsbi5kYXRhLnNldChzKSxhLnB1dEltYWdlRGF0YShuLDAsMCksITB9cmV0dXJuITF9LGkoW24ucHJvcGVydHkoKV0sdC5wcm90b3R5cGUsXCJsYXllclwiLHZvaWQgMCksdD1pKFtuLnN1YmNsYXNzKFwiZXNyaS52aWV3cy4zZC5sYXllcnMuSW1hZ2VyeUxheWVyVmlldzNEXCIpXSx0KX0obi5kZWNsYXJlZChzKSl9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/ImageryLayerView3D.js\n");

/***/ })

}]);